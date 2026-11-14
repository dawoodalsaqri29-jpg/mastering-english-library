#!/usr/bin/env python3
"""
Compose a carousel from a JSON spec.

Usage:
    python3 compose_carousel.py spec.json

Outputs:
    <output_dir>/slide_NN.png    individual slides for IG (multi-image post)
    <output_dir>/<name>.pdf       multi-page stitched PDF for LinkedIn / preview
    <output_dir>/<name>-grid.png  single contact-sheet preview image

Two visual modes:
    - "image_overlay": each slide composes onto a buyer-supplied (or AI-generated)
      background image with a dark gradient at the bottom for text legibility.
    - "text_only": no images required; each slide is a gradient backdrop with the
      text on it. Always works regardless of whether the buyer has any image-gen
      MCP connected.

See the SPEC_EXAMPLE at the bottom of this file for the full schema.
"""

from __future__ import annotations

import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont


# ----------------------------------------------------------------------
# Font loading
# ----------------------------------------------------------------------

# OS-level fallbacks if the spec doesn't supply a font (testing convenience only;
# the skill always supplies a bundled font path in production).
SYSTEM_FONT_FALLBACKS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial Bold.ttf",
]


class FontPair:
    """Wraps the main font + an italic font (if available), with variable-weight support."""

    def __init__(self, main_path: str, italic_path: str | None, bold_weight: int | None):
        self.main_path = main_path
        self.italic_path = italic_path or main_path
        self.bold_weight = bold_weight  # may be None for static fonts

    def _maybe_set_weight(self, font: ImageFont.FreeTypeFont, weight: int | None):
        if weight is None:
            return font
        try:
            font.set_variation_by_axes([weight])
        except Exception:
            # static font; ignore
            pass
        return font

    def main(self, size: int, weight: int | None = None) -> ImageFont.FreeTypeFont:
        f = ImageFont.truetype(self.main_path, size)
        return self._maybe_set_weight(f, weight if weight is not None else self.bold_weight)

    def italic(self, size: int, weight: int | None = None) -> ImageFont.FreeTypeFont:
        f = ImageFont.truetype(self.italic_path, size)
        return self._maybe_set_weight(f, weight if weight is not None else self.bold_weight)


def load_fonts(font_spec: dict | None) -> FontPair:
    """Resolve fonts from the spec, falling back to OS fonts if no spec provided."""
    if not font_spec:
        for path in SYSTEM_FONT_FALLBACKS:
            if os.path.exists(path):
                return FontPair(path, None, None)
        sys.stderr.write("No bundled font supplied and no usable system font found.\n")
        sys.exit(1)

    main_path = font_spec.get("path")
    italic_path = font_spec.get("italic_path")
    bold_weight = font_spec.get("bold_weight")  # e.g. 700 for variable fonts

    if not main_path or not os.path.exists(main_path):
        sys.stderr.write(f"Font file not found: {main_path}\n")
        sys.exit(1)
    if italic_path and not os.path.exists(italic_path):
        # Italic missing is non-fatal — fall back to main
        italic_path = None

    return FontPair(main_path, italic_path, bold_weight)


# ----------------------------------------------------------------------
# Color helpers
# ----------------------------------------------------------------------

def parse_color(s, default=(255, 255, 255)) -> tuple[int, int, int]:
    if s is None:
        return default
    if isinstance(s, (list, tuple)):
        return tuple(int(c) for c in s[:3])
    if isinstance(s, str):
        s = s.lstrip("#")
        if len(s) == 3:
            s = "".join(c * 2 for c in s)
        if len(s) == 6:
            return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16))
    return default


# ----------------------------------------------------------------------
# Layout helpers
# ----------------------------------------------------------------------

def fit_cover_image(img: Image.Image, target_size: tuple[int, int]) -> Image.Image:
    target_w, target_h = target_size
    src_w, src_h = img.size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h
    if src_ratio > target_ratio:
        new_h = src_h
        new_w = int(src_h * target_ratio)
        left = (src_w - new_w) // 2
        img = img.crop((left, 0, left + new_w, new_h))
    else:
        new_w = src_w
        new_h = int(src_w / target_ratio)
        top = (src_h - new_h) // 3  # bias toward top so action stays visible above text
        img = img.crop((0, top, new_w, top + new_h))
    return img.resize(target_size, Image.LANCZOS)


def vertical_gradient(size: tuple[int, int], top_color: tuple[int, int, int], bottom_color: tuple[int, int, int]) -> Image.Image:
    """Build a smooth top→bottom gradient image (used for text_only mode backgrounds)."""
    w, h = size
    img = Image.new("RGB", (w, h), bottom_color)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(h - 1, 1)
        r = int(top_color[0] + (bottom_color[0] - top_color[0]) * t)
        g = int(top_color[1] + (bottom_color[1] - top_color[1]) * t)
        b = int(top_color[2] + (bottom_color[2] - top_color[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def apply_bottom_gradient(img: Image.Image, gradient_color: tuple[int, int, int], start_y_frac: float = 0.45, opacity: int = 220) -> Image.Image:
    """Darken the bottom of an image with a smooth vertical alpha gradient so text stays legible."""
    img = img.convert("RGBA")
    w, h = img.size
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    start_y = int(h * start_y_frac)
    grad_h = h - start_y
    for i in range(grad_h):
        t = i / max(grad_h - 1, 1)
        alpha = int(opacity * (t ** 1.5))
        ImageDraw.Draw(overlay).line(
            [(0, start_y + i), (w, start_y + i)],
            fill=(*gradient_color, alpha),
        )
    return Image.alpha_composite(img, overlay).convert("RGB")


def wrap_to_width(text: str, fnt: ImageFont.FreeTypeFont, max_w: int, draw: ImageDraw.ImageDraw) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        candidate = " ".join(current + [word])
        bbox = draw.textbbox((0, 0), candidate, font=fnt)
        w = bbox[2] - bbox[0]
        if w <= max_w or not current:
            current.append(word)
        else:
            lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def line_height(fnt: ImageFont.FreeTypeFont, draw: ImageDraw.ImageDraw) -> int:
    bbox = draw.textbbox((0, 0), "Ag", font=fnt)
    return bbox[3] - bbox[1]


def text_block_height(lines: list[str], fnt: ImageFont.FreeTypeFont, line_spacing: float, draw: ImageDraw.ImageDraw) -> int:
    line_h = line_height(fnt, draw)
    gap = int(line_h * (line_spacing - 1))
    return len(lines) * line_h + max(0, len(lines) - 1) * gap


def draw_centered_block(
    draw: ImageDraw.ImageDraw,
    lines: list[str],
    fnt: ImageFont.FreeTypeFont,
    cx: int,
    top: int,
    line_spacing: float,
    fill: tuple[int, int, int],
) -> int:
    line_h = line_height(fnt, draw)
    gap = int(line_h * (line_spacing - 1))
    y = top
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=fnt)
        w = bbox[2] - bbox[0]
        draw.text((cx - w // 2, y), line, fill=fill, font=fnt)
        y += line_h + gap
    return y


def draw_left_block(
    draw: ImageDraw.ImageDraw,
    lines: list[str],
    fnt: ImageFont.FreeTypeFont,
    left: int,
    top: int,
    line_spacing: float,
    fill: tuple[int, int, int],
) -> int:
    line_h = line_height(fnt, draw)
    gap = int(line_h * (line_spacing - 1))
    y = top
    for line in lines:
        draw.text((left, y), line, fill=fill, font=fnt)
        y += line_h + gap
    return y


def page_indicator(draw: ImageDraw.ImageDraw, w: int, h: int, idx: int, total: int, fonts: FontPair):
    text = f"{idx} / {total}"
    fnt = fonts.main(20, weight=400)
    bbox = draw.textbbox((0, 0), text, font=fnt)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad = 24
    pill_w = tw + 28
    pill_h = th + 16
    x = w - pad - pill_w
    y = pad
    draw.rounded_rectangle((x, y, x + pill_w, y + pill_h), radius=pill_h // 2, fill=(0, 0, 0, 180))
    draw.text((x + 14, y + 8), text, fill=(255, 255, 255, 230), font=fnt)


# ----------------------------------------------------------------------
# Slide renderers
# ----------------------------------------------------------------------

def render_cover(
    background: Image.Image,
    title: str,
    subtitle: str | None,
    size: tuple[int, int],
    fonts: FontPair,
    text_color: tuple[int, int, int],
    accent_color: tuple[int, int, int],
    idx: int,
    total: int,
    show_page_indicator: bool,
) -> Image.Image:
    img = background.copy()
    w, h = size
    draw = ImageDraw.Draw(img, "RGBA")
    if show_page_indicator:
        page_indicator(draw, w, h, idx, total, fonts)

    title_size = int(w * 0.085)
    title_font = fonts.main(title_size, weight=700)
    max_text_w = int(w * 0.84)
    title_lines: list[str] = []
    for chunk in title.split("\n"):
        title_lines.extend(wrap_to_width(chunk.strip(), title_font, max_text_w, draw))
    title_block_h = text_block_height(title_lines, title_font, 1.1, draw)

    sub_lines: list[str] = []
    sub_font = None
    sub_block_h = 0
    if subtitle:
        sub_size = int(w * 0.030)
        sub_font = fonts.italic(sub_size)
        sub_lines = wrap_to_width(subtitle, sub_font, max_text_w, draw)
        sub_block_h = text_block_height(sub_lines, sub_font, 1.3, draw)

    gap_between = int(w * 0.030)
    block_total_h = title_block_h + (gap_between + sub_block_h if sub_lines else 0)
    block_top = h - int(h * 0.07) - block_total_h

    cx = w // 2
    y_after_title = draw_centered_block(draw, title_lines, title_font, cx, block_top, 1.1, text_color)
    if sub_lines:
        draw_centered_block(draw, sub_lines, sub_font, cx, y_after_title + gap_between, 1.3, accent_color)

    return img


def render_content(
    background: Image.Image,
    lines: list[str],
    footer: str | None,
    size: tuple[int, int],
    fonts: FontPair,
    text_color: tuple[int, int, int],
    accent_color: tuple[int, int, int],
    idx: int,
    total: int,
    show_page_indicator: bool,
) -> Image.Image:
    img = background.copy()
    w, h = size
    draw = ImageDraw.Draw(img, "RGBA")
    if show_page_indicator:
        page_indicator(draw, w, h, idx, total, fonts)

    body_size = int(w * 0.040)
    body_font = fonts.main(body_size, weight=600)
    pad_x = int(w * 0.075)
    max_text_w = w - 2 * pad_x

    wrapped: list[str] = []
    for line in lines:
        if line.strip() == "":
            wrapped.append("")  # paragraph break
            continue
        wrapped.extend(wrap_to_width(line, body_font, max_text_w, draw))
    block_h = text_block_height(wrapped, body_font, 1.32, draw)

    foot_lines: list[str] = []
    foot_font = None
    foot_block_h = 0
    if footer:
        foot_size = int(w * 0.026)
        foot_font = fonts.italic(foot_size)
        foot_lines = wrap_to_width(footer, foot_font, max_text_w, draw)
        foot_block_h = text_block_height(foot_lines, foot_font, 1.3, draw)

    gap_between = int(w * 0.025)
    block_total_h = block_h + (gap_between + foot_block_h if foot_lines else 0)
    block_top = h - int(h * 0.07) - block_total_h

    y_after = draw_left_block(draw, wrapped, body_font, pad_x, block_top, 1.32, text_color)
    if foot_lines:
        draw_left_block(draw, foot_lines, foot_font, pad_x, y_after + gap_between, 1.3, accent_color)

    return img


def make_background(
    slide: dict,
    size: tuple[int, int],
    mode: str,
    gradient_top: tuple[int, int, int],
    gradient_bottom: tuple[int, int, int],
    image_gradient_color: tuple[int, int, int],
) -> Image.Image:
    """Produce the slide's background, ready for text overlay."""
    if mode == "text_only" or not slide.get("image"):
        # Pure gradient background
        return vertical_gradient(size, gradient_top, gradient_bottom)
    # Image with a gradient darken pass at the bottom for legibility
    img = Image.open(slide["image"]).convert("RGB")
    img = fit_cover_image(img, size)
    return apply_bottom_gradient(img, image_gradient_color, start_y_frac=0.40, opacity=220)


def make_grid(slides: list[Image.Image], cols: int = 3, gutter: int = 24, bg=(20, 20, 22)) -> Image.Image:
    sw, sh = slides[0].size
    rows = (len(slides) + cols - 1) // cols
    grid_w = cols * sw + (cols + 1) * gutter
    grid_h = rows * sh + (rows + 1) * gutter
    grid = Image.new("RGB", (grid_w, grid_h), bg)
    for i, s in enumerate(slides):
        r = i // cols
        c = i % cols
        x = gutter + c * (sw + gutter)
        y = gutter + r * (sh + gutter)
        grid.paste(s, (x, y))
    if grid.width > 2400:
        ratio = 2400 / grid.width
        grid = grid.resize((2400, int(grid.height * ratio)), Image.LANCZOS)
    return grid


# ----------------------------------------------------------------------
# Main
# ----------------------------------------------------------------------

def main():
    if len(sys.argv) != 2:
        print("Usage: compose_carousel.py spec.json", file=sys.stderr)
        sys.exit(1)

    with open(sys.argv[1], "r") as f:
        spec = json.load(f)

    output_dir = spec["output_dir"]
    os.makedirs(output_dir, exist_ok=True)
    name = spec.get("name", "carousel")
    size = tuple(spec.get("size", [1080, 1350]))
    mode = spec.get("mode", "image_overlay")  # image_overlay | text_only
    show_page_indicator = bool(spec.get("page_indicator", True))

    fonts = load_fonts(spec.get("font"))

    colors = spec.get("colors", {})
    text_color = parse_color(colors.get("text"), (255, 255, 255))
    accent_color = parse_color(colors.get("accent"), (235, 215, 175))
    image_gradient_color = parse_color(colors.get("image_gradient"), (0, 0, 0))

    bg_grad = spec.get("background_gradient", ["#1a1a2e", "#16213e"])
    if isinstance(bg_grad, list) and len(bg_grad) >= 2:
        gradient_top = parse_color(bg_grad[0], (26, 26, 46))
        gradient_bottom = parse_color(bg_grad[1], (22, 33, 62))
    else:
        gradient_top, gradient_bottom = (26, 26, 46), (22, 33, 62)

    slides_spec = spec["slides"]
    total = len(slides_spec)
    rendered: list[Image.Image] = []

    for i, s in enumerate(slides_spec, start=1):
        background = make_background(s, size, mode, gradient_top, gradient_bottom, image_gradient_color)
        kind = s.get("kind", "content")
        if kind == "cover":
            img = render_cover(
                background, s["title"], s.get("subtitle"), size, fonts,
                text_color, accent_color, i, total, show_page_indicator,
            )
        else:
            img = render_content(
                background, s["lines"], s.get("footer"), size, fonts,
                text_color, accent_color, i, total, show_page_indicator,
            )
        out_path = os.path.join(output_dir, f"slide_{i:02d}.png")
        img.save(out_path, "PNG", optimize=True)
        rendered.append(img.convert("RGB"))
        print(f"  → {out_path}")

    pdf_path = os.path.join(output_dir, f"{name}.pdf")
    rendered[0].save(pdf_path, "PDF", resolution=144.0, save_all=True, append_images=rendered[1:])
    print(f"  → {pdf_path}")

    grid = make_grid(rendered)
    grid_path = os.path.join(output_dir, f"{name}-grid.png")
    grid.save(grid_path, "PNG", optimize=True)
    print(f"  → {grid_path}")


SPEC_EXAMPLE = """
{
  "output_dir": "/path/to/outputs",
  "name": "my-carousel",
  "size": [1080, 1350],                       // 1:1 → [1080, 1080], 4:5 → [1080, 1350], 9:16 → [1080, 1920]
  "mode": "image_overlay",                    // "image_overlay" or "text_only"
  "page_indicator": true,
  "font": {
    "path": "/abs/path/to/Inter-Variable.ttf",
    "italic_path": "/abs/path/to/Inter-Italic-Variable.ttf",
    "bold_weight": 700                        // for variable fonts; null for static
  },
  "colors": {
    "text": "#FFFFFF",
    "accent": "#EBD7AF",
    "image_gradient": "#000000"               // overlay color for image_overlay mode
  },
  "background_gradient": ["#1a1a2e", "#16213e"],   // for text_only mode (top → bottom)
  "slides": [
    {"kind": "cover", "image": "/tmp/img1.jpg", "title": "BIG\\nTITLE", "subtitle": "smaller line"},
    {"kind": "content", "image": "/tmp/img2.jpg", "lines": ["Line one.", "Line two.", "", "After a break."]},
    {"kind": "content", "image": "/tmp/img3.jpg", "lines": ["Body text..."], "footer": "Follow for more."}
  ]
}
"""


if __name__ == "__main__":
    main()

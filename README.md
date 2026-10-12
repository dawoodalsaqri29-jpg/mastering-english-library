# Mastering English Library

A free, static website of English grammar and vocabulary lessons and downloadable PDFs for CEFR levels B1, B2, C1 and C2. It runs on GitHub Pages with no build step.

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | Home page with level cards and lesson list |
| `library.html` | Searchable, filterable catalogue of every resource |
| `levels.html` | Guide to the CEFR levels |
| `lessons/` | Web lessons, one HTML file each |
| `pdfs/b1` … `pdfs/c2` | PDF files, one folder per level |
| `data/library.json` | The catalogue that powers the library page |
| `assets/` | Shared stylesheet and script |

## Adding a PDF

1. Put the file in the folder for its level, for example `pdfs/b2/reported-speech.pdf`.
2. Add an entry to `data/library.json`:

```json
{
  "title": "Reported speech",
  "level": "B2",
  "skill": "Grammar",
  "type": "pdf",
  "path": "pdfs/b2/reported-speech.pdf",
  "description": "Rules and practice for reporting what people said.",
  "tags": ["grammar", "b2"]
}
```

`level` must be one of `B1`, `B2`, `C1`, `C2`. `skill` can be Grammar, Vocabulary, Reading, Writing, Listening or Speaking. `path` can also be a full `https://` link to a file hosted elsewhere.

## Adding a web lesson

Copy any file in `lessons/`, change the content, and add a matching entry to `data/library.json` with `"type": "lesson"`.

## Running locally

The library page loads its data with `fetch`, so serve the folder rather than opening files directly:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing with GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, and save. The site appears at `https://<username>.github.io/mastering-english-library/`.

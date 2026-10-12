# mastering-english-library

A free, static website of English grammar and vocabulary lessons and downloadable PDFs for CEFR levels B1, B2, C1 and C2. It runs on GitHub Pages with no build step.

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | Home page and PDF store: hero, level picker, filterable library, how it works |
| `assets/catalog.js` | **Your catalogue.** Edit this file to add, remove or change PDF titles, prices and buy links |
| `assets/store.css`, `assets/store.js` | Styles and behaviour for the home page |
| `library.html`, `levels.html`, `lessons/` | Free web lessons with a searchable index |
| `pdfs/b1` … `pdfs/c2` | Free lesson PDFs, one folder per level |
| `data/library.json` | The index that powers the free lessons page |

## Adding a PDF to the store

Open `assets/catalog.js` and copy one of the entries in `window.BOOKS`:

```js
{
  title: "Mastering Phrasal Verbs",
  subtitle: "Part One",
  level: "B1–B2",
  category: "Vocabulary",
  description: "The phrasal verbs you meet every day, grouped by particle.",
  price: "$2",
  cover: "assets/covers/phrasal-verbs.jpg",
  link: "https://your-store.example/phrasal-verbs",
},
```

- `level` can be one level such as `B2` or a range such as `B1–C1`. A range appears under every level it covers.
- `category` creates a filter chip automatically.
- `cover` is optional. Leave it as `""` to get a generated cover.
- `link` is where the "Get PDF" button goes, for example your Wix, PayPal or Gumroad product page. While it is `"#"`, the button does nothing.

Set `storeUrl` in `window.SITE` to your main store address to turn the header button into a "Visit store" link. Set `contactEmail` to show an email link in the footer.

## Running locally

The library page loads its data with `fetch`, so serve the folder rather than opening files directly:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing with GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, and save. The site appears at `https://<username>.github.io/mastering-english-library/`.

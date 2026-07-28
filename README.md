# DSR Pharmachem static website

This folder is a cleaned, runnable version of the supplied HTTrack download.

## Run locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Folder structure

```text
dsr-clean/
|-- index.html
|-- favicon.png
|-- package.json
|-- README.md
|-- serve.json
|-- scripts/
|   `-- check-project.mjs
|-- src/
|   |-- app.jsx
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Capabilities.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |   |-- Hero.jsx
|   |   `-- Products.jsx
|   `-- styles/
|       `-- main.css
`-- static/
    |-- css/
    |   `-- styles.css
    `-- js/
        |-- bundle.js
        `-- main.js
```

## Important limitation

The supplied archive was an offline website mirror, not the original source
repository. The editable browser modules now live in `src/` as `.jsx` files.
They use plain JavaScript template strings so the site can run directly in the
browser without a build step. `serve.json` makes the local server send `.jsx`
modules with a JavaScript content type.

This cleaned package removes HTTrack indexes, cache files, Cloudflare challenge
scripts, preview overlays, Emergent scripts and analytics bootstrapping from the
HTML shell. It keeps the compiled application required to render the captured
site.

# Portfolio — Rithiwik Garuda

Personal portfolio site (static HTML/CSS/JS). Deploys to Netlify straight from
this repo — no build step.

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

Push to `main` — the Netlify build copies the site files (`index.html`,
`styles.css`, `script.js`, `assets/`) into a fresh `dist/` folder and publishes it.
If you add new top-level files, add them to the `command` in `netlify.toml`.

---
name: preview-docs
description: Run and verify this VitePress documentation site locally — start the dev server to eyeball rendered pages, or run a production build to confirm content changes don't break the site. Use after editing guide/** Markdown, the theme, or .vitepress/config.mts, or whenever asked to preview/run/build the docs.
---

# Preview & verify the docs

This repo is a VitePress site; the only dependency is VitePress itself.

## Setup (once per fresh clone)
```bash
npm install
```

## Live preview (for eyeballing edits)
```bash
npm run docs:dev
```
Starts a hot-reloading dev server (default http://localhost:5173). Best for checking rendering, sidebar placement, images, links, and any raw HTML (e.g. `<iframe>` embeds). If you need the user to interact with the running server, ask them to launch it with a leading `!` in their prompt so its output lands in the session.

## Production build (for verifying nothing is broken)
```bash
npm run docs:build
```
Compiles into `.vitepress/dist` (gitignored). Run this after non-trivial content or config changes — it surfaces broken frontmatter, dead sidebar `link`s, and malformed Markdown/HTML. A clean run ends with `build complete`. Then optionally:
```bash
npm run docs:preview
```
to serve the built output.

## What to check when verifying
- **New/renamed page:** appears in the sidebar (entry added in `.vitepress/config.mts`), renders, images load, internal links resolve.
- **Images:** referenced by absolute path `/guide/public/images/<section>/<page-slug>/<file>.webp` and actually present on disk.
- **Video/raw HTML:** `<iframe>` embeds render responsively (handled by `.vp-doc iframe` rules in `.vitepress/theme/custom.css`).
- **Build health:** `docs:build` completes without errors or dead-link warnings.

## Tips
- No headless browser is installed here; verify visually via `docs:dev`, and confirm build integrity via `docs:build`.
- For quick static checks across many files (e.g. "which pages reference a missing image" or "list all sidebar links"), prefer context-mode tools (`ctx_batch_execute` / `ctx_execute`) over large raw greps.

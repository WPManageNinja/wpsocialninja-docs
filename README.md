<h1 align="center">WP Social Ninja — Documentation</h1>

<p align="center">
  Source for the official <a href="https://docs.wpsocialninja.com">WP Social Ninja documentation</a>.<br>
  Built with <a href="https://vitepress.dev">VitePress</a>.
</p>

<p align="center">
  <a href="https://wpsocialninja.com">Website</a> ·
  <a href="https://docs.wpsocialninja.com">Live Docs</a> ·
  <a href="https://wordpress.org/plugins/wp-social-ninja/">WordPress Plugin</a>
</p>

---

## About

This repository contains the documentation for **WP Social Ninja**, the all-in-one WordPress plugin for displaying social media feeds, business reviews, and social chat widgets. It's a content-only site — the pages are Markdown, rendered into a static site by VitePress and published at **[docs.wpsocialninja.com](https://docs.wpsocialninja.com)**.

The docs cover:

- 📱 **Social Feeds** — Facebook, Instagram, X (Twitter), YouTube, and TikTok
- ⭐ **Business Reviews** — Google, Facebook, Yelp, TripAdvisor, Trustpilot, Booking.com, Airbnb, AliExpress, WooCommerce, and more
- 💬 **Social Chat** — Messenger, WhatsApp, Telegram, and other chat widgets
- 🧩 **Custom sources, testimonials, notification popups, integrations, and settings**

## Tech stack

- [VitePress](https://vitepress.dev) `^2.0.0-alpha.12` (Vite + Vue powered static site generator)
- Content authored in Markdown
- A light custom theme (`.vitepress/theme/`)

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org) (18+) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (hot reload)
npm run docs:dev
```

Then open the URL printed in the terminal (default **http://localhost:5173**).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run docs:dev` | Start the dev server with hot reload for live editing. |
| `npm run docs:build` | Build the production site into `.vitepress/dist`. |
| `npm run docs:preview` | Serve the built site locally to preview the production output. |

## Project structure

```
.
├── index.md                     # Homepage (VitePress "home" layout)
├── guide/                       # All documentation pages, grouped by section
│   ├── getting-started/
│   ├── social-feeds/
│   ├── business-reviews/
│   ├── custom-source/
│   ├── advanced-features/
│   ├── ai-integration/
│   ├── social-chat/
│   ├── integrations/
│   ├── management-settings/
│   ├── customization-design/
│   ├── import-export-migration/
│   ├── troubleshooting-support/
│   └── public/images/…          # Screenshots for the guide pages
├── .vitepress/
│   ├── config.mts               # Site config: title, nav, and the full sidebar
│   └── theme/                   # Custom theme (layout, styles, components)
└── public/                      # Site assets (logo, favicon, robots.txt)
```

## Contributing

Contributions to improve the docs are welcome!

### Editing an existing page

1. Find the page under `guide/<section>/`.
2. Edit the Markdown and preview with `npm run docs:dev`.
3. Open a pull request.

### Adding a new page

Adding a page takes **three** steps — the last one is easy to forget:

1. **Create** `guide/<section>/<file-slug>.md` with frontmatter and a single `# H1`:
   ```markdown
   ---
   title: "Your Page Title"
   description: "One-sentence summary."
   ---

   # Your Page Title

   Intro paragraph…

   ## First Step

   ![Descriptive alt text](/guide/public/images/<section>/<page-slug>/screenshot.webp)
   ```
2. **Add screenshots** under `guide/public/images/<section>/<page-slug>/` and reference them with absolute paths starting `/guide/public/images/…`. `.webp` is preferred.
3. **Register it in the sidebar** — add an entry in `.vitepress/config.mts` (the sidebar is defined inline). Without this, the page won't appear in the navigation:
   ```js
   { "text": "Your Page Title", "link": "/guide/<section>/<file-slug>" }
   ```

### Style guidelines

- Use a friendly, beginner-friendly, second-person voice ("First, go to…").
- **Bold** UI labels and menu paths, e.g. **WP Social Ninja → Platforms**.
- One `# H1` per page; use `##` for sections and `###` for steps.
- Always add meaningful `alt` text to images.

Before opening a PR, run `npm run docs:build` to make sure the site builds cleanly.

## Deployment

The site is built with `npm run docs:build` and served from `docs.wpsocialninja.com`. Merges to the `master` branch are published to production.

## Links

- 🌐 **Website:** https://wpsocialninja.com
- 📖 **Live documentation:** https://docs.wpsocialninja.com
- 🧩 **Plugin on WordPress.org:** https://wordpress.org/plugins/wp-social-ninja/

---

<p align="center">Maintained by the <a href="https://wpmanageninja.com">WPManageNinja</a> team.</p>

# CLAUDE.md

Guidance for working in this repository.

## What this is

This is the **WP Social Ninja documentation site** — a [VitePress](https://vitepress.dev) static site that documents the WP Social Ninja WordPress plugin (social feeds, business reviews, chat widgets). It is deployed at **https://docs.wpsocialninja.com**.

There is **no application code here** — the deliverable is Markdown content plus a thin VitePress theme. 99% of tasks are writing/editing docs pages, managing screenshots, and keeping the sidebar in sync.

## Stack & commands

- VitePress `^2.0.0-alpha.12` is the only dependency. Node + npm.
- First time in a fresh clone: `npm install`.
- `npm run docs:dev` — local dev server with hot reload (use this to preview edits).
- `npm run docs:build` — production build into `.vitepress/dist` (gitignored). Run this to confirm content/HTML doesn't break the build.
- `npm run docs:preview` — serve the built `dist` locally.

## Repository layout

```
index.md                       # Homepage — VitePress "home" layout (hero + feature grid)
guide/<section>/*.md           # ~94 documentation pages, grouped into 12 sections
guide/public/images/<section>/<page-slug>/*.webp   # Screenshots for the pages
.vitepress/config.mts          # Site config: title, nav, and the ENTIRE sidebar (inline, ~577 lines)
.vitepress/theme/
  index.ts                     # Theme entry: registers <Feedback> globally, imports custom.css, uses layout-1.vue
  layout-1.vue                 # ACTIVE layout: forces links to open in new tabs; injects <Feedback> in doc footer
  custom.css                   # Media styling (centered/responsive img/video/iframe) + homepage hero tweaks
  components/Feedback.vue      # Per-page feedback widget (shown under every doc)
  components/Layout.vue        # ORPHANED / unused (old hero-video experiment) — do not rely on it
public/  &  .vitepress/public/ # Static assets: favicon.svg, logo.svg, logo-dark.png, robots.txt
```

The `guide/` sections: `getting-started`, `social-feeds`, `business-reviews`, `custom-source`, `advanced-features`, `ai-integration`, `social-chat`, `integrations`, `management-settings`, `customization-design`, `import-export-migration`, `troubleshooting-support`.

## Content conventions (match these when authoring)

**Frontmatter** — most pages start with:
```markdown
---
title: "Human Readable Title"
description: ""
---
```
`description` is often left empty but prefer to fill it for SEO. A few older pages omit frontmatter and open directly with the `# H1`; new pages should include frontmatter.

**Headings** — exactly one `# H1` per page (the page topic). Use `##` for major sections, `###`/`####` for steps and sub-points. The right-hand outline is configured for `[2,3]` (h2 + h3).

**Voice** — friendly, second-person, step-by-step ("First, go to…", "Let's walk through…"). Bold UI labels: **Settings**, **Save**, **WP Social Ninja → Platforms**. Keep it beginner-friendly.

**Images** — screenshots live under `guide/public/images/<section>/<page-slug>/` and are referenced by **absolute path** (the whole `guide/public` folder is copied verbatim into the build, which is why absolute paths work):
```markdown
![Descriptive alt text of the screenshot](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/access-youtube-feed.webp)
```
Prefer `.webp`. Always write meaningful alt text.

**Internal links** — link between pages with relative paths (no `.md` extension), e.g. `[Google reviews](../business-reviews/google-configuration)`, or absolute `/guide/...`. Folder overview pages are linked as `/guide/social-feeds/` (trailing slash → the section `index.md`). Note: `layout-1.vue` forces all `.vp-doc` links (internal and external) to open in a new tab.

**Callouts** — both VitePress styles are used; either is fine:
```markdown
> [!NOTE]
> Important note.

::: tip
Pro-feature hint.
:::
```

**Video embeds** — VitePress renders raw HTML, so embed with a raw `<iframe>`. `custom.css` already makes `.vp-doc iframe` responsive and sized like the page images (`width:100%; aspect-ratio:16/9`). Do **not** add headings/labels around embeds. (Historical note: guide videos were added then reverted because they showed an outdated plugin UI — only embed current-UI videos.)

## The sidebar lives in config.mts

The **entire sidebar is hand-maintained inline** in `.vitepress/config.mts` as a nested array (with emoji section labels and `collapsed` flags). **Creating a new page is not enough — it will not appear until you add a matching sidebar entry.** Entry shape:
```js
{ "text": "Page Title", "link": "/guide/<section>/<file-slug>" }   // no .md, leading slash
```
Nest it inside the correct section/sub-section object. Section index pages use a trailing-slash link (e.g. `/guide/social-feeds/`). The top `nav` (User Docs / Changelog / Website) is also here.

## Gotchas

- **Never edit** `.vitepress/dist/` (build output, gitignored) or `node_modules/`. Edit source `.md` and theme files only.
- **Two `public` dirs**: root `public/` and `.vitepress/public/` hold site chrome (logo, favicon, robots.txt). Page screenshots go in `guide/public/images/…`, not these.
- `.gitignore` excludes `*.txt` (except `public/robots.txt`), `*.py`, `*.pyc`, `*.log`, and `Archive.zip` — don't rely on committing those file types.
- Adding a page = **new `.md`** + **screenshots under `guide/public/images/…`** + **sidebar entry in `config.mts`**. Missing the sidebar entry is the most common mistake.
- Migrating content from BetterDocs XML exports? A dedicated `migrator-expert` agent exists for that conversion.

## Git

- Default/main branch is `master`. Branch before committing new work.
- Commit or push **only when asked**.

## Working style in this repo

- After non-trivial content changes, run `npm run docs:build` to catch broken syntax, and/or `npm run docs:dev` to eyeball rendering.
- When a task spans many pages (audits, bulk edits, "which pages mention X"), prefer the context-mode tools (`ctx_batch_execute`, `ctx_execute`) over dumping large greps into context.
- Reusable procedures for this repo are captured as skills in `.claude/skills/` — check there first (e.g. adding a page, previewing the site).

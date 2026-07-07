---
name: add-doc-page
description: Create a new WP Social Ninja documentation page in this VitePress site the correct way — scaffold the Markdown with proper frontmatter and structure, place screenshots under the right image folder, and (critically) register the page in the sidebar in .vitepress/config.mts so it actually shows up. Use whenever adding, moving, or renaming a guide page under guide/**.
---

# Add a documentation page

Adding a page to this VitePress docs site takes **three** coordinated changes. Skipping the sidebar step is the #1 mistake — the page builds fine but is invisible to readers.

## Step 1 — Create the Markdown file

Put it under the correct section: `guide/<section>/<file-slug>.md` (kebab-case slug). Sections: `getting-started`, `social-feeds`, `business-reviews`, `custom-source`, `advanced-features`, `ai-integration`, `social-chat`, `integrations`, `management-settings`, `customization-design`, `import-export-migration`, `troubleshooting-support`.

Start from this template:
```markdown
---
title: "Human Readable Title"
description: "One-sentence summary for SEO and social cards."
---

# Human Readable Title

Short intro paragraph: what this feature does and what the reader will accomplish. Friendly, second-person voice.

## First Major Step

Step-by-step instructions. Bold UI labels like **WP Social Ninja → Platforms** and the **Save** button.

![Descriptive alt text](/guide/public/images/<section>/<page-slug>/screenshot-1.webp)

## Next Step

More steps…
```

Rules:
- Exactly one `# H1` (matches `title`). `##` for sections, `###`/`####` for sub-steps (outline shows h2+h3).
- Match the surrounding pages' beginner-friendly, second-person tone.
- Internal links: relative, no `.md` — e.g. `[Google reviews](../business-reviews/google-configuration)`. Section overviews: `/guide/<section>/`.
- Callouts: `> [!NOTE]` or `::: tip … :::`.

## Step 2 — Add screenshots

Store images in `guide/public/images/<section>/<page-slug>/` and reference them by **absolute path** starting `/guide/public/images/…` (the `guide/public` folder is copied verbatim into the build). Prefer `.webp`. Always include real alt text.

## Step 3 — Register it in the sidebar (REQUIRED)

Edit `.vitepress/config.mts`. The whole sidebar is an inline nested array. Add an entry inside the correct section/sub-section:
```js
{ "text": "Page Title", "link": "/guide/<section>/<file-slug>" }   // no .md, leading slash
```
Place it in a sensible order within its group. If you created a whole new section, add a new top-level object with a `text` (often an emoji + name), `collapsed` flag, and `items` array. Check the top `nav` too if the page should be linked there.

## Step 4 — Verify

Run `npm run docs:dev` and confirm: the page renders, appears in the sidebar under the right section, images load, and links work. Then `npm run docs:build` to ensure the build passes. (See the `preview-docs` skill.)

## Checklist
- [ ] `guide/<section>/<slug>.md` created with frontmatter + single H1
- [ ] Screenshots under `guide/public/images/<section>/<slug>/`, absolute `/guide/public/...` refs, alt text
- [ ] Sidebar entry added in `.vitepress/config.mts` (and nav if relevant)
- [ ] `docs:dev` looks right; `docs:build` passes

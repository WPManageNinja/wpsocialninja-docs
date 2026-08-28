import type { MarkdownRenderer } from 'vitepress'

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // The component builds the <img> from a raw string prop, so `src` never goes
    // through Vite's asset pipeline. Relative paths (./foo.png, ../foo.png) would be
    // emitted verbatim and 404 in production, so fall through to the default renderer
    // for anything that is not an absolute or remote URL.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    // Pass src/alt as props - no slot. The component owns the <img>, so SSR and
    // client render the exact same markup. Explicit closing tag, not self-closing.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}

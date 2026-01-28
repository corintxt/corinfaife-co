// Force full page reload for markdown file changes
if (module.hot) {
  const originalApply = module.hot.apply

  module.hot.apply = function (options) {
    const hasMarkdownUpdate = options && options.modules &&
      options.modules.some(mod =>
        mod && mod.id && (mod.id.endsWith('.md') || mod.id.endsWith('.mdx'))
      )

    if (hasMarkdownUpdate) {
      console.log('[Markdown HMR] Detected markdown change, reloading page...')
      window.location.reload()
      return Promise.resolve()
    }

    return originalApply.call(this, options)
  }
}

const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
  webpack: (config, { dev, isServer, webpack }) => {
    if (dev && !isServer) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()

        // Add custom HMR handler for markdown files
        if (entries['main.js'] && !entries['main.js'].includes('./scripts/markdown-hmr.js')) {
          entries['main.js'].unshift('./scripts/markdown-hmr.js')
        }

        return entries
      }
    }
    return config
  }
})

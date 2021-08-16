module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    if (dev) {
      config.devtool = 'cheap-module.source-map'
    }

    return config
  },
}

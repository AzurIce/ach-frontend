modules.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathReweite: {
          '^/api': ''
        }
      }
    }
  }
}
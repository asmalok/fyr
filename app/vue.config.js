module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://us-central1-fyr-backend.cloudfunctions.net/",
        changeOrigin: true
      }
    }
  }
};

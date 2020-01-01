module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 4000,
    https: false,
    proxy: {
      "/api": {
        // target: "http://127.0.0.1:3000", // 真实请求的地址
        target: "http://134.175.243.203.1:3000", // 真实请求的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "/api": "/api"
        }
      }
    }
  }
};

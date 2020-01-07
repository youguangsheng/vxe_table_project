// const _monent = require("moment");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const externals = {
  vue: "Vue",
  "vue-router": "VueRouter",
  vuex: "Vuex",
  "vxe-table-plugin-element": "VXETablePluginElement",
  "xe-utils": "XEUtils",
  "vxe-table": "VXETable",
  lodash: "_",
  axios: "axios",
  "element-ui": "ELEMENT",
  moment: "moment"
};

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        externals: externals,
        plugins: [new BundleAnalyzerPlugin()]
      };
    }
    return {
      externals: externals
    };
  },
  devServer: {
    host: "0.0.0.0",
    port: 4000,
    https: false,
    proxy: {
      "/api": {
        // target: "http://127.0.0.1:3000", // 真实请求的地址
        target: "http://134.175.243.203:3000", // 真实请求的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "/api": "/api"
        }
      }
    }
  },
  productionSourceMap: false
};

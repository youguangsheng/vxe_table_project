const _moment = require("moment");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

const configuration = {
  buildTime: _moment().format("YYYY-MM-DD HH:mm:ss"),
  title: "my app",
  keywords: "",
  description: "个人练习项目"
};

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        externals: externals, //不打包引入的排除在外
        plugins: [
          /* 打包分析器 */
          new BundleAnalyzerPlugin(),
          new HtmlWebpackPlugin({
            template: "public/index.html",
            buildTime: configuration.buildTime,
            title: configuration.title,
            keywords: configuration.keywords,
            description: configuration.description,
            BASE_URL: "/"
          })
        ]
      };
    }
    return {
      // externals: externals,
      plugins: [
        /* html模板配置 */
        /*  new HtmlWebpackPlugin({
          template: "public/index.html",
          buildTime: configuration.buildTime,
          title: configuration.title,
          keywords: configuration.keywords,
          description: configuration.description,
          BASE_URL: "/"
        }) */
      ]
    };
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "development") {
        args[0].template = "./public/index_dev.html";
      }
      return args;
    });
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
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    // requireModuleExtension: false,
    loaderOptions: {
      /* 全局变量配置 */
      sass: {
        prependData: `
        @import "@/assets/css/global/variable.scss";
        `
      }
    }
  }
};

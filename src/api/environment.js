import _ from "lodash";

const _defaultConfig = {
  develpopment: {
    backEndUrl: "http://yougs.top",
    api: "/api/"
  },
  production: {
    backEndUrl: "http://yougs.top",
    api: "/api/"
  }
};

let _env = (process.env.NODE_ENV || "production").toLowerCase();

let envConfig =
  _env === "production"
    ? _defaultConfig.develpopment
    : _defaultConfig.production;

// console.log(`当前环境：${_env}`);

export default _.merge(envConfig, {
  env: _env
});

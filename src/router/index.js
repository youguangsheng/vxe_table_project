import Vue from "vue";
import VueRouter from "vue-router";
import login from "./login";
import backstage from "./backstage";
import _ from "lodash";

Vue.use(VueRouter);

const routes = _.concat(login, backstage);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

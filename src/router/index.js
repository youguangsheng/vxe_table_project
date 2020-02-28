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

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.fullPath === "/backstage/todoMVC") {
    to.meta.keepAlive = true;
  }
  if (to.fullPath === "/") {
    to.meta.keepAlive = false;
  }
  next();
});

export default router;

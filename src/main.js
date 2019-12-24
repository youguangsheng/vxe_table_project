import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Icon from "vue-svg-icon/Icon.vue";
import ElementUI from "element-ui";
import "@/assets/css/index.scss";
import "element-ui/lib/theme-chalk/index.css";

Vue.component("icon", Icon);
Vue.use(ElementUI, { size: "small" });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import todoMVC from "./todoMVC.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todoMVC
  }
});

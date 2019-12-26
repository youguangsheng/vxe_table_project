import Vue from "vue";
import { Message } from "element-ui";

Vue.prototype.error = message => {
  Message.error(message);
};

Vue.prototype.success = message => {
  Message.success(message);
};

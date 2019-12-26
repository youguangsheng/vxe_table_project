import axios from "./index.js";

export default {
  login: params => axios.post("/user/userInfo", params)
};

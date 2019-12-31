import axios from "./index.js";
import environment from "@/api/environment";
export default {
  login: params => axios.post(`${environment.api}user/userInfo`, params),
  register: params => axios.post(`${environment.api}user/userRegister`, params)
};

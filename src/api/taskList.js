import axios from "./index.js";
import environment from "@/api/environment";
export default {
  getAllTaskList: params =>
    axios.get(`${environment.api}task/allTaskList`, params),
  saveTask: params => axios.post(`${environment.api}task/saveTask`, params),
  getTaskDetail: params =>
    axios.post(`${environment.api}task/taskDetail`, params)
};

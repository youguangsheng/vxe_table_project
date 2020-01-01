import axios from "./index.js";
import environment from "@/api/environment";
export default {
  getAllTaskList: params =>
    axios.get(`${environment.api}task/allTaskList`, params),
  saveTask: params => axios.post(`${environment.api}task/saveTask`, params),
  getTaskDetail: params =>
    axios.post(`${environment.api}task/taskDetail`, params),
  completeTask: params =>
    axios.post(`${environment.api}task/completeTask`, params),
  deleteTask: params => axios.post(`${environment.api}task/deleteTask`, params)
};

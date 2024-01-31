import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.47:1235",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "PubliVendas.app",
  },
});

export default api;

import axios from "axios";
import { api } from "../useConfig";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    'Content-type': 'application/json'
  },
});

export default axiosInstance;

import axios from "axios";
import { api } from "../useConfig";

const axiosInstance = axios.create({
  baseURL: api,
  //   headers: {
  //     Authorization: "",
  //   },
});

export default axiosInstance;

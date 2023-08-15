import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3006",
});


export default axiosInstance
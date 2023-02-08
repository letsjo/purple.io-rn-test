import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://192.168.0.29:9000",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
export default userAPI;

import axios from "axios";

const baseURL = "https://i-shoopin.com/api";

const api = axios.create({
  baseURL,
});

export default api;

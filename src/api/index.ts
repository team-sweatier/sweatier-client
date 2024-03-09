import axios from "axios";
import authAPI from "./auth/auth.api";

export const client = axios.create({
  baseURL:
    "https://port-0-sweatier-server-v2-dc9c2nltdolabq.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
};

export default api;

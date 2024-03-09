import axios from "axios";
import authAPI from "./auth/auth.api";

export const client = axios.create({
  baseURL: "https://sweatier-server-he2ntmjbhq-du.a.run.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
};

export default api;

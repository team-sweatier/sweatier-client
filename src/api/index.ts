import axios from "axios";
import authAPI from "./auth/auth.api";
import tierAPI from "./tier/tier.api";
import userAPI from "./user/user.api";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

const api = {
  auth: authAPI,
  user: userAPI,
  tier: tierAPI,
};

export default api;

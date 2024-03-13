import axios from "axios";
import authAPI from "./auth/auth.api";
import matchAPI from "./match/match.api";
import ratingAPI from "./rating/rating.api";
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
  match: matchAPI,
  rating: ratingAPI,
};

export default api;

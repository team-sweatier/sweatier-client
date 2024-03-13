import { Match } from "@/types/Match.type";
import { Response } from "@/types/Response.type";
import { client } from "..";
import {
  GetUserProfileData,
  RegisterUserData,
  UpdateMyProfileData,
} from "./user.data";

async function registerUser(formData: FormData) {
  const response = await client.post<Response<RegisterUserData>>(
    "/users/profile",
    formData
  );
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const profile = data.result;
  return profile;
}

async function getMyProfile() {
  const response = await client.get<Response<GetUserProfileData>>(
    "/users/profile"
  );
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const myProfile = data.result;
  return myProfile;
}

async function updateMyProfile(formData: FormData) {
  const response = await client.put<Response<UpdateMyProfileData>>(
    "/users/profile",
    formData
  );
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const updatedMyProfile = data.result;
  return updatedMyProfile;
}

async function getMyMatches() {
  const url = "/users/matches";
  const response = await client.get<Response<Match[]>>(url);
  const data = response.data;

  if (!data.success) throw new Error(data.message);

  const matches = data.result;
  return matches;
}

const userAPI = {
  registerUser,
  getMyProfile,
  updateMyProfile,
  getMyMatches,
};

export default userAPI;

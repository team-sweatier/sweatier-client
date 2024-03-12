import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetUserProfileData, RegisterUserData } from "./user.data";

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

const userAPI = {
  registerUser,
  getMyProfile,
};

export default userAPI;

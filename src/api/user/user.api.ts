import { Response } from "@/types/Response.type";
import { client } from "..";
import { RegisterUserData } from "./user.data";

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

const userAPI = {
  registerUser,
};

export default userAPI;

import { client } from "..";

async function registerUser(formData: FormData) {
  const response = await client.post("/users/profile", formData);
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const profile = data.result;

  return profile;
}

const userAPI = {
  registerUser,
};

export default userAPI;

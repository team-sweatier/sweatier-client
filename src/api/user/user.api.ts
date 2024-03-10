import { client } from "..";

async function registerUser(formData: FormData) {
  const response = await client.post("/users/profile", formData);

  console.log(response);
}

const userAPI = {
  registerUser,
};

export default userAPI;

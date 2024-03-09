import { client } from "..";
import { SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/users/sign-up", dto);
  console.log(response);
}

async function signUpWithKaKao() {
  await client.get("/users/sign-in/kakao");
}

const authAPI = {
  signUp,
  signUpWithKaKao,
};

export default authAPI;

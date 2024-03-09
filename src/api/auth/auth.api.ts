import { client } from "..";
import { SignInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/users/sign-up", dto);
  console.log(response);
}

async function signUpWithKaKao() {
  await client.get("/users/sign-in/kakao");
}

async function signIn(dto: SignInDto) {
  const response = await client.post("/users/sign-in", dto);
  console.log(response);
}

const authAPI = {
  signUp,
  signUpWithKaKao,
  signIn,
};

export default authAPI;

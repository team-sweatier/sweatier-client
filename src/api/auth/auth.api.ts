import { client } from "..";
import { SignInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/users/sign-up", dto);
  console.log(response);
}

async function signIn(dto: SignInDto) {
  await client.post("/users/sign-in", dto);
}

async function signInKaKao(code: string) {
  await client.get(`/users/sign-in/kakao/callback?code=${code}`);
}

const authAPI = {
  signUp,
  signIn,
  signInKaKao,
};

export default authAPI;

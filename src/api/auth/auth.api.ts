import { Response } from "@/types/Response.type";
import { client } from "..";
import { RefreshTokenData } from "./auth.data";
import { SignInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/users/sign-up", dto);
  return response;
}

async function signIn(dto: SignInDto) {
  await client.post("/users/sign-in", dto);
}

async function signInKaKao(code: string) {
  await client.get(`/users/sign-in/kakao/callback?code=${code}`);
}

async function refreshToken() {
  const response = await client.get<Response<RefreshTokenData>>(
    `/users/refresh-token`
  );
  const data = response.data;

  if (!data.success) throw new Error(data.message);
}

async function logOut() {
  await client.delete("/users/sign-out");
}

const authAPI = {
  signUp,
  signIn,
  signInKaKao,
  refreshToken,
  logOut,
};

export default authAPI;

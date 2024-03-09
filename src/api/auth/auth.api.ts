import { client } from "..";
import { SignInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/users/sign-up", dto);
  console.log(response);
}

async function signIn(dto: SignInDto) {
  const response = await client.post("/users/sign-in", dto);
  console.log(response);
}

const authAPI = {
  signUp,
  signIn,
};

export default authAPI;

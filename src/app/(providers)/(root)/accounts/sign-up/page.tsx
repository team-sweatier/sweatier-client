"use client";

import Image from "next/image";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLengthOfPasswordValid, setIsLengthOfPasswordValid] =
    useState<boolean>(false);
  const [isCombinationOfPasswordValid, setIsCombinationOfPasswordValid] =
    useState<boolean>(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] =
    useState<boolean>(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|ru)$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValid(emailRegex.test(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    setIsLengthOfPasswordValid(
      passwordInput.length >= 8 && passwordInput.length <= 20
    );
    setIsCombinationOfPasswordValid(passwordRegex.test(passwordInput));

    // 비밀번호 입력란 상태 변하면 비밀번호 확인 체킹도 다시 업데이트
    setIsPasswordCheckValid(passwordCheck === passwordInput);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
    setIsPasswordCheckValid(e.target.value === password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isEmailValid &&
      isCombinationOfPasswordValid &&
      isLengthOfPasswordValid &&
      isPasswordCheckValid
    ) {
      console.log({ email, password });
    } else {
      alert("양식을 올바르게 작성해주세요.");
    }
  };

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold text-center pt-24 ">회원가입하기</h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-10">
          <ul className="flex flex-col">
            <li className="flex flex-col">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일을 입력해주세요."
                className={`${
                  isEmailValid ? "" : "input-error"
                } h-12 border border-slate-300 rounded-md pl-4 mt-2 outline-none focus:border-violet-700 transition-all duration-500 ease-in-out`}
              />
              <p
                className={`mt-2 text-xs ${
                  isEmailValid ? "text-green-500" : "text-gray-500"
                }`}
              >
                v 유효한 형식의 이메일이어야 합니다.
              </p>
            </li>
            <li className="flex flex-col">
              <label htmlFor="">비밀번호</label>
              <input
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="비밀번호를 입력해주세요."
                className="h-12 border border-slate-300 rounded-md pl-4 mt-2 outline-none focus:border-violet-700 transition-all duration-500 ease-in-out"
              />
              <p
                className={`mt-2 text-xs ${
                  isLengthOfPasswordValid ? "text-green-500" : "text-gray-500"
                }`}
              >
                v 비밀번호는 8자리 이상이어야 합니다
              </p>
              <p
                className={`mt-2 text-xs ${
                  isCombinationOfPasswordValid
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                v 대소문자, 특수문자가 1개 이상 포함되어야 합니다.
              </p>
            </li>
            <li className="flex flex-col">
              <label htmlFor="">비밀번호 확인</label>
              <input
                type="password"
                onChange={handlePasswordCheckChange}
                value={passwordCheck}
                placeholder="비밀번호를 한번 더 입력해주세요."
                className="h-12 border border-slate-300 rounded-md pl-4 mt-2 outline-none focus:border-violet-700 transition-all duration-500 ease-in-out"
              />
              <p
                className={`mt-2 text-xs ${
                  isPasswordCheckValid ? "text-green-500" : "text-gray-500"
                }`}
              >
                v 비밀번호와 일치해야 합니다.
              </p>
            </li>
          </ul>
          <button
            className={`w-full px-6 rounded-md text-white font-semibold h-12 mt-10 mb-16 transition  active:translate-y-0 ${
              isEmailValid &&
              isLengthOfPasswordValid &&
              isCombinationOfPasswordValid &&
              isPasswordCheckValid
                ? `bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-1`
                : `bg-gray-400/50`
            }`}
            type="submit"
          >
            회원가입하기
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
            <span className="px-2 text-xs text-gray-600 bg-white">
              소셜 회원가입
            </span>
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
          </div>
          <button className="bg-yellow-300 hover:bg-yellow-200 w-full px-6 rounded-md text- font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0">
            <div className="h-full flex items-center justify-center">
              <Image
                src="/assets/kakaotalk.svg"
                alt="카카오톡"
                width={24}
                height={24}
              />
              <span>카카오로 계속하기</span>
            </div>
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignUpPage;

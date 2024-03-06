"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import SignUpInput from "./_components/SignUpInput";
import ValidationMessage from "./_components/ValidationMessage";

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
  const [focusedInput, setFocusedInput] = useState<string>("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

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
      if (!isEmailValid) {
        setFocusedInput("email");
        emailRef.current?.focus();
      } else if (!isLengthOfPasswordValid || !isCombinationOfPasswordValid) {
        setFocusedInput("password");
        passwordRef.current?.focus();
      } else if (!isPasswordCheckValid) {
        setFocusedInput("passwordCheck");
        passwordCheckRef.current?.focus();
      }
    }
  };

  const handleClickOutside = () => {
    setFocusedInput("");
  };

  return (
    <main onClick={handleClickOutside}>
      <section>
        <h2 className="text-3xl font-bold text-center pt-24 text-neutral-90">
          회원가입
        </h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-10">
          <ul className="flex flex-col">
            <li className="flex flex-col">
              <SignUpInput
                ref={emailRef}
                htmlFor="email"
                label="이메일"
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일을 입력해주세요."
                isValid={isEmailValid}
                focusedInput={focusedInput}
                focusedInputType="email"
              />
              <ValidationMessage
                isValid={isEmailValid}
                focusedInput={focusedInput}
                focusedInputName="email"
                message="이메일 주소는 유효한 형식이어야 합니다."
              />
            </li>
            <li className="flex flex-col">
              <SignUpInput
                ref={passwordRef}
                htmlFor="password"
                label="비밀번호"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요."
                isValid={
                  isLengthOfPasswordValid && isCombinationOfPasswordValid
                }
                focusedInput={focusedInput}
                focusedInputType="password"
              />
              <ValidationMessage
                isValid={isLengthOfPasswordValid}
                focusedInput={focusedInput}
                focusedInputName="password"
                message="비밀번호는 8자리 이상이어야 합니다."
              />
              <ValidationMessage
                isValid={isCombinationOfPasswordValid}
                focusedInput={focusedInput}
                focusedInputName="password"
                message="대소문자, 특수문자가 최소 1개씩 포함되어야 합니다."
              />
            </li>
            <li className="flex flex-col">
              <SignUpInput
                ref={passwordCheckRef}
                htmlFor="passwordCheck"
                label="비밀번호 확인"
                id="passwordCheck"
                type="password"
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
                placeholder="비밀번호를 한번 더 입력해주세요."
                isValid={isPasswordCheckValid}
                focusedInput={focusedInput}
                focusedInputType="passwordCheck"
              />
              <ValidationMessage
                isValid={isPasswordCheckValid}
                focusedInput={focusedInput}
                focusedInputName="passwordCheck"
                message="비밀번호와 일치해야 합니다."
              />
            </li>
          </ul>
          <button
            className={`w-full px-6 rounded-md text-white font-semibold h-12 mt-10 mb-16 transition active:translate-y-0 ${
              isEmailValid &&
              isLengthOfPasswordValid &&
              isCombinationOfPasswordValid &&
              isPasswordCheckValid
                ? `bg-primary-100 hover:-translate-y-1`
                : `bg-gray-400/50`
            }`}
            type="submit"
          >
            가입하기
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 border-t-2 border-dotted border-neutral-40"></div>
            <span className="px-2 text-xs text-neutral-70 bg-white">
              소셜 회원가입
            </span>
            <div className="flex-1 border-t-2 border-dotted border-neutral-40"></div>
          </div>
          <button className="bg-yellow-300 w-full px-6 rounded-md text- font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0">
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
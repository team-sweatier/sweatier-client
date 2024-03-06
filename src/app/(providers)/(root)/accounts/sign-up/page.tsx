"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ValidationIcon from "./_components/ValidationIcon";

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
              <label htmlFor="email" className="text-neutral-70">
                이메일
              </label>
              <input
                ref={emailRef}
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일을 입력해주세요."
                className={`h-12 border bg-primary-20 text-neutral-50 rounded-md pl-4 mt-2 outline-none transition-all duration-500 ease-in-out ${
                  !isEmailValid && focusedInput === "email"
                    ? "input-error"
                    : "focus:border-primary-100 "
                } `}
              />
              <p
                className={`flex mt-2 text-xs text-gray-500 ${
                  isEmailValid ? "text-primary-100" : ""
                } ${
                  !isEmailValid && focusedInput === "email"
                    ? "text-red-500"
                    : ""
                }`}
              >
                <ValidationIcon
                  isValid={isEmailValid}
                  focusedInput={focusedInput}
                  focusedInputName="email"
                />
                <span className="flex items-center">
                  유효한 형식의 이메일이어야 합니다.
                </span>
              </p>
            </li>
            <li className="flex flex-col">
              <label htmlFor="" className="text-neutral-70">
                비밀번호
              </label>
              <input
                ref={passwordRef}
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="비밀번호를 입력해주세요."
                className={`h-12 border bg-primary-20 text-neutral-50 rounded-md pl-4 mt-2 outline-none transition-all duration-500 ease-in-out ${
                  (!isLengthOfPasswordValid || !isCombinationOfPasswordValid) &&
                  focusedInput === "password"
                    ? "input-error"
                    : "focus:border-primary-100 "
                }`}
              />
              <p
                className={`flex mt-2 text-xs  text-gray-500 ${
                  isLengthOfPasswordValid ? "text-primary-100" : ""
                } ${
                  !isLengthOfPasswordValid && focusedInput === "password"
                    ? "text-red-500"
                    : ""
                }`}
              >
                <ValidationIcon
                  isValid={isLengthOfPasswordValid}
                  focusedInput={focusedInput}
                  focusedInputName="password"
                />
                <span className="flex items-center">
                  비밀번호는 8자리 이상이어야 합니다
                </span>
              </p>
              <p
                className={`flex mt-2 text-xs  text-gray-500 ${
                  isCombinationOfPasswordValid ? "text-primary-100" : ""
                } ${
                  !isCombinationOfPasswordValid && focusedInput === "password"
                    ? "text-red-500"
                    : ""
                }`}
              >
                <ValidationIcon
                  isValid={isCombinationOfPasswordValid}
                  focusedInput={focusedInput}
                  focusedInputName="password"
                />
                <span className="flex items-center">
                  대소문자, 특수문자가 1개 이상 포함되어야 합니다.
                </span>
              </p>
            </li>
            <li className="flex flex-col">
              <label htmlFor="" className="text-neutral-70">
                비밀번호 확인
              </label>
              <input
                ref={passwordCheckRef}
                type="password"
                onChange={handlePasswordCheckChange}
                value={passwordCheck}
                placeholder="비밀번호를 한번 더 입력해주세요."
                className={`h-12 border bg-primary-20 text-neutral-50 rounded-md pl-4 mt-2 outline-none transition-all duration-500 ease-in-out ${
                  !isPasswordCheckValid && focusedInput === "passwordCheck"
                    ? "input-error"
                    : "focus:border-primary-100 "
                }`}
              />
              <p
                className={`flex mt-2 text-xs  text-gray-500 ${
                  isPasswordCheckValid ? "text-primary-100" : ""
                } ${
                  !isPasswordCheckValid && focusedInput === "passwordCheck"
                    ? "text-red-500"
                    : ""
                }`}
              >
                <ValidationIcon
                  isValid={isPasswordCheckValid}
                  focusedInput={focusedInput}
                  focusedInputName="passwordCheck"
                />
                <span className="flex items-center">
                  비밀번호와 일치해야 합니다.
                </span>
              </p>
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
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
            <span className="px-2 text-xs text-gray-600 bg-white">
              소셜 회원가입
            </span>
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
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

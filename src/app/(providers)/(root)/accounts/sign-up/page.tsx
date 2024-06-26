"use client";

import api from "@/api";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpInput from "./_components/SignUpInput";
import ValidationMessage from "./_components/ValidationMessage";

function SignUpPage() {
  const { logIn } = useAuth();
  const router = useRouter();

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

  const { mutateAsync: signUp } = useMutation({
    mutationFn: api.auth.signUp,
  });

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

  const handleSubmitSignUpForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (
      isEmailValid &&
      isCombinationOfPasswordValid &&
      isLengthOfPasswordValid &&
      isPasswordCheckValid
    ) {
      // api호출 함수 실행 - signUp 진행.
      try {
        await signUp({ email, password });
        logIn(); // isLoggedIn 전역상태를 true로 변경
        toast.success("회원가입에 성공하였습니다!");
        router.push("/");
      } catch (e) {
        toast.error("회원가입에 실패하였습니다."); // alert창 toastify로 바꿀예정
      }
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

  const handleClickKaKaoButton = () => {
    // 백엔드 주소 매핑 /users/sign-in/kakao
    // await signInKaKao();
    router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/sign-in/kakao`);
  };

  const handleClickOutside = () => {
    setFocusedInput("");
  };

  return (
    <Page>
      <section
        className="pb-3 w-[390px] text-neutral-90"
        onClick={handleClickOutside}
      >
        <h2 className="a11y-hidden">회원가입하기</h2>
        <form
          onSubmit={handleSubmitSignUpForm}
          className="mx-auto max-w-[350px]"
        >
          <p className="pb-4 text-2xl font-[800] tracking-[-.1em]">
            수준별 운동 매칭 서비스
          </p>
          <p className="font-bold tracking-tighter">
            지금 스웨티어에 가입하세요
          </p>
          <ul className="flex flex-col pt-10 gap-y-7">
            <li className="flex flex-col relative">
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
            <li className="flex flex-col relative">
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
            <li className="flex flex-col relative">
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
            type="submit"
            className={`w-full px-6 rounded-lg text-white font-bold h-12 mt-10 mb-10 transition active:translate-y-0 ${
              isEmailValid &&
              isLengthOfPasswordValid &&
              isCombinationOfPasswordValid &&
              isPasswordCheckValid
                ? `bg-primary-100 hover:-translate-y-1`
                : `bg-gray-400/50`
            }`}
          >
            가입하기
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 border-t border-neutral-40"></div>
            <span className="px-2 text-xs text-neutral-70 bg-white">
              간편 회원가입
            </span>
            <div className="flex-1 border-t border-neutral-40"></div>
          </div>
        </form>
        <div className="mx-auto max-w-[350px]">
          <button
            onClick={handleClickKaKaoButton}
            type="button"
            className="bg-[#FEE500] text-[#392020] w-full px-6 rounded-lg font-bold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
          >
            <div className="h-full flex items-center justify-center">
              <Image
                src="/assets/sign-up_page/kakaotalk.svg"
                alt="카카오톡"
                width={24}
                height={24}
              />
              <span>카카오로 계속하기</span>
            </div>
          </button>
        </div>
      </section>
    </Page>
  );
}

export default SignUpPage;

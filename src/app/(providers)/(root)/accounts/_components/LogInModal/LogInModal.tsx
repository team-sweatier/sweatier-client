"use client";

import api from "@/api";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useAuthStore, useModalStore } from "@/store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogInModal() {
  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: api.auth.signIn,
  });
  const { logIn } = useAuthStore();
  const modal = useModalStore();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleClickLogIn = async () => {
    try {
      await signIn({ email, password });
      logIn();
      modal.close();
      alert("로그인 처리되었습니다"); // toastify 적용예정
      router.push("/");
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  const handleClickGoToSignUp = () => {
    modal.close();
  };

  const handleClickLogInWithKaKao = () => {
    router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/sign-in/kakao`);
  };

  return (
    <Modal className="px-5 py-[27px]">
      <Heading className="text-center text-base py-0 mb-6">로그인</Heading>
      <form
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="flex flex-col w-70 gap-y-4 sm:px-5 sm:py-5 "
      >
        <ul className="flex flex-col gap-y-[18px]">
          <li className="flex flex-col relative">
            <label
              htmlFor="email"
              className="text-neutral-70 text-[11px] absolute left-5 top-[-7px] overflow-hidden bg-white z-5 px-1"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="h-10 border text-neutral-70 border-neutral-30 focus:border-primary-100 outline-none transition rounded-lg placeholder:text-neutral-50 text-[11px] pl-6"
              value={email}
              placeholder="이메일을 입력해주세요."
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="flex flex-col relative">
            <label
              htmlFor="password"
              className="text-neutral-70 text-[11px] absolute left-5 top-[-7px] overflow-hidden  bg-white z-5 px-1"
            >
              비밀번호
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="h-10 border text-neutral-50 border-neutral-30 focus:border-primary-100 outline-none transition rounded-lg placeholder:text-neutral-50 text-[11px] pl-6"
              value={password}
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? (
                <Image
                  src="/assets/sign-up_page/password_hide.svg"
                  alt="비밀번호 가리기"
                  width={17}
                  height={17}
                  className="absolute right-[14px] top-[12px]"
                />
              ) : (
                <Image
                  src="/assets/sign-up_page/password_view.svg"
                  alt="비밀번호 보이기"
                  width={17}
                  height={17}
                  className="absolute right-[14px] top-[12px]"
                />
              )}
            </button>
          </li>
        </ul>
        {email && password ? (
          <button
            onClick={handleClickLogIn}
            disabled={isPending}
            className="h-8 bg-primary-100 text-white rounded-[10px] text-sm font-semibold my-[6px] transition hover:-translate-y-1 active:translate-y-0"
          >
            확인
          </button>
        ) : (
          <button
            disabled={isPending}
            className="h-8 bg-neutral-20 text-neutral-40 rounded-[10px] text-sm font-semibold my-[6px] transition hover:-translate-y-1 active:translate-y-0"
          >
            확인
          </button>
        )}

        <div className="flex items-center justify-center space-x-2">
          <div className="flex-1 border-t border-neutral-40"></div>
          <span className="px-2 text-xs text-neutral-70 bg-white">
            간편 로그인
          </span>
          <div className="flex-1 border-t border-neutral-40"></div>
        </div>
        <button
          onClick={handleClickLogInWithKaKao}
          className="h-8 bg-[#FEE500] w-full px-6 rounded-lg font-semibold my-[6px] transition hover:-translate-y-1 active:translate-y-0"
        >
          <div className="h-full flex items-center justify-center">
            <Image
              src="/assets/sign-up_page/kakaotalk.svg"
              alt="카카오톡"
              width={24}
              height={24}
            />
            <span className="text-[#392020] text-xs font-bold">
              카카오로 계속하기
            </span>
          </div>
        </button>
        <Link
          href="/accounts/sign-up"
          onClick={handleClickGoToSignUp}
          className="text-primary-100 text-[11px] text-center"
        >
          아직 회원이 아니신가요?{" "}
          <span className="underline font-bold">회원가입</span>
        </Link>
      </form>
    </Modal>
  );
}

export default LogInModal;

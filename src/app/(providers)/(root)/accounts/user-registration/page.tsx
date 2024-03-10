"use client";

import Page from "@/components/Page";
import Image from "next/image";
import { useState } from "react";
import DropDownBoxOfBank from "./_components/DropDownBoxOfBank";

enum Gender {
  Male = "male",
  Female = "female",
}

const bankName = [
  "국민은행",
  "기업은행",
  "농협은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "우체국",
  "카카오뱅크",
  "토스뱅크",
];

function UserResigtrationPage() {
  const [gender, setGender] = useState<Gender | "">("");

  const handleGenderSelect = (gender: Gender) => {
    setGender(gender);
  };

  return (
    <Page>
      <section className="pb-3 w-full">
        <h2 className="a11y-hidden">유저 정보 등록</h2>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
          className="mx-auto max-w-lg py-3 px-5"
        >
          <p className="py-4 text-2xl font-black tracking-[-.1em]">
            유저 정보 등록
          </p>
          <p className="font-bold tracking-tighter">
            원활한 서비스 사용을 위해
          </p>
          <p className="font-bold tracking-tighter">
            아래의 필수사항을 입력해주세요
          </p>
          <ul className="flex flex-col py-10 gap-y-7">
            <li className="flex flex-col pb-6">
              <div className="w-32 h-32 rounded-full bg-neutral-30 mx-auto"></div>
            </li>
            <li className="flex flex-col">
              <div className="flex">
                <label htmlFor="" className="font-bold text-neutral-70">
                  닉네임
                </label>
                <p className="flex items-center">
                  <Image
                    src="/assets/validation_default.svg"
                    alt="디폴트"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs text-neutral-40">
                    중복되지 않는 닉네임이어야 합니다.
                  </span>
                </p>
              </div>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                className={`h-12 border border-slate-300 rounded-md pl-4 mt-2 focus:border-primary-80 outline-none transition-all duration-500 ease-in-out`}
              />
            </li>
            <li className="flex flex-col gap-y-4">
              <p className="font-bold text-neutral-70">성별</p>
              <div className="flex items-center gap-x-3">
                <button
                  type="button" // 폼 제출을 트리거하지 않도록 type을 button으로 설정합니다.
                  className={`px-4 py-2 rounded-3xl text-neutral-50 border border-neutral-40 ${
                    gender === Gender.Male && "bg-primary-100 text-white"
                  }`}
                  onClick={() => handleGenderSelect(Gender.Male)}
                >
                  남성
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-3xl text-neutral-50 border border-neutral-40 ${
                    gender === Gender.Female && "bg-primary-100 text-white"
                  }`}
                  onClick={() => handleGenderSelect(Gender.Female)}
                >
                  여성
                </button>
              </div>
              {/* <label htmlFor="" className="font-bold text-neutral-70">
                성별
              </label>
              <input type="text" name="" id="" /> */}
            </li>
            <li className="flex flex-col">
              <label htmlFor="" className="font-bold text-neutral-70">
                휴대폰 번호
              </label>
              <input
                type="text"
                placeholder="휴대폰 번호를 입력해주세요."
                name=""
                id=""
                className={`h-12 border border-slate-300 rounded-md pl-4 mt-2 focus:border-primary-80 outline-none transition-all duration-500 ease-in-out`}
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="" className="font-bold text-neutral-70">
                계좌 정보
              </label>
              <DropDownBoxOfBank options={bankName} />
              <input
                type="text"
                placeholder="계좌번호를 입력해주세요."
                name=""
                id=""
                className={`h-12 border border-slate-300 rounded-md pl-4 mt-2 focus:border-primary-80 outline-none transition-all duration-500 ease-in-out`}
              />
            </li>
            <li>
              <button
                className={`w-full px-6 rounded-md text-white font-semibold h-12 mt-10 mb-10 transition active:translate-y-0 ${`bg-primary-100 hover:-translate-y-1`}`}
              >
                등록하기
              </button>
            </li>

            {/* <li className="flex flex-col">
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
            </li> */}
          </ul>
          {/* <button
            onClick={handleClickSignUpButton}
            className={`w-full px-6 rounded-md text-white font-semibold h-12 mt-10 mb-10 transition active:translate-y-0 ${
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
          <button
            onClick={handleClickKaKaoButton}
            className="bg-yellow-300 w-full px-6 rounded-md font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
          >
            <div className="h-full flex items-center justify-center">
              <Image
                src="/assets/kakaotalk.svg"
                alt="카카오톡"
                width={24}
                height={24}
              />
              <span>카카오로 계속하기</span>
            </div>
          </button> */}
        </form>
      </section>
    </Page>
  );
}

export default UserResigtrationPage;

"use client";

import Page from "@/components/Page";
import Image from "next/image";
import { useRef, useState } from "react";
import DropDownBoxOfBank from "./_components/DropDownBoxOfBank";
import GenderButton, { Gender } from "./_components/GenderButton";

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
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectGender = (gender: Gender) => {
    setGender(gender);
  };

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleClickCameraIcon = () => {
    fileInputRef.current?.click();
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
              <div className="w-32 h-32 rounded-full bg-neutral-30 mx-auto flex relative">
                {imageUrl && (
                  <Image src={imageUrl} alt="이미지" width={128} height={128} />
                )}
                <button onClick={handleClickCameraIcon} className="">
                  <Image
                    src="/assets/camera.svg"
                    alt="카메라"
                    width={36}
                    height={36}
                    className="absolute bottom-2 right-2"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleSelectImage}
                    className="a11y-hidden"
                  />
                </button>
              </div>
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
                <GenderButton
                  gender={Gender.Male}
                  selectedGender={gender}
                  onSelect={handleSelectGender}
                />
                <GenderButton
                  gender={Gender.Female}
                  selectedGender={gender}
                  onSelect={handleSelectGender}
                />
              </div>
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
          </ul>
        </form>
      </section>
    </Page>
  );
}

export default UserResigtrationPage;

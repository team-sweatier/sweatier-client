"use client";

import api from "@/api";
import RoundButton from "@/components/Buttons/RoundButton";
import Page from "@/components/Page";
import { useProfile } from "@/contexts/profile.context";
import { bankName } from "@/utils/bankName";
import { Gender } from "@/utils/gender";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import DropDownBoxOfBank from "../../accounts/user-registration/_components/DropDownBoxOfBank";
import PhoneNumberInput from "../../accounts/user-registration/_components/PhoneNumberInput";
import RegistrationInput from "../../accounts/user-registration/_components/RegistrationInput";

function ProfileEditPage() {
  const queryClient = useQueryClient();
  const profile = useProfile();
  const { mutateAsync: updateUser, isPending } = useMutation({
    mutationFn: api.user.updateMyProfile,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["myProfile"] }),
  });

  // 지역상태 초기값으로 받아온 프로필 데이터 값 저장.
  const [nickname, setNickname] = useState<string>("");
  const [gender, setGender] = useState<Gender | "">("");
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedBankName, setSelectedBankName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [oneLiner, setOneLiner] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (profile) {
      setNickname(profile.nickName);
      setGender(profile.gender as Gender);

      setPhoneNumber(profile.phoneNumber);
      setSelectedBankName(profile.bankName);
      setAccountNumber(profile.accountNumber);
      setOneLiner(profile.oneLiner as string);
      // const imageUrl = profile
      //   ? `https://storage.googleapis.com/sweatier-user-profile-image/${
      //       profile.id
      //     }?timestamp=${new Date().getTime()}`
      //   : null;
      setImageUrl(profile.imageUrl);
    }
  }, [profile]);

  const handleSubmitEditForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (!file && !imageUrl) return alert("프로필 이미지는 필수입니다!");
      if (file) formData.append("file", file);
      formData.append("gender", gender);
      formData.append("phoneNumber", phoneNumber);
      formData.append("bankName", selectedBankName);
      formData.append("accountNumber", accountNumber);
      formData.append("nickName", nickname);
      formData.append("oneLiner", oneLiner);

      await updateUser(formData);
      toast.success(`프로필 업데이트에 성공하였습니다.`);
      router.prefetch("/my-page");
      router.push("/my-page");
    } catch (error) {
      throw new Error("프로필 업데이트에 실패하였습니다.");
    }
  };
  // 성별선택
  const handleSelectGender = (gender: Gender) => {
    setGender(gender);
  };

  // 카메라 아이콘 클릭
  const handleClickCameraIcon = () => {
    fileInputRef.current?.click();
  };

  // 이미지 선택
  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  // 은행명 선택
  const handleSelectBankName = (bankName: string) => {
    setSelectedBankName(bankName);
  };

  return (
    <Page>
      <section className="pb-3 w-full text-neutral-90 lg:max-w-[768px]">
        <h2 className="a11y-hidden">내 정보 수정</h2>
        <form
          className="mx-auto max-w-lg lg:max-w-[768px]"
          onSubmit={handleSubmitEditForm}
        >
          <p className="py-4 text-2xl font-black tracking-[-.1em] lg:text-[28px]">
            내 정보 수정
          </p>

          <ul className="flex flex-col py-10 gap-y-7">
            <li className="flex flex-col pb-6">
              <div className="w-32 h-32 mx-auto relative">
                <div className="w-full h-full rounded-full bg-neutral-30 mx-auto flex relative overflow-hidden">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt="이미지"
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
                <button type="button" onClick={handleClickCameraIcon}>
                  <Image
                    src="/assets/user-registration_page/camera.svg"
                    alt="카메라"
                    width={36}
                    height={36}
                    className="absolute bottom-0 right-2"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleSelectImage}
                    className="a11y-hidden"
                  />
                </button>
              </div>
              <p className="tracking-tighter text-[11px] text-neutral-50 mx-auto max-w-[198px] mt-1 lg:pt-3">
                오프라인 운동 시 팀원들이 알아볼 수 있게 본인의 사진을 프로필로
                등록해주세요!
              </p>
            </li>
            <li className="flex flex-col">
              <div className="flex">
                <label htmlFor="nickname" className="font-bold text-neutral-70">
                  닉네임
                </label>
                <p className="flex items-center">
                  <Image
                    src="/assets/sign-up_page/validation_default.svg"
                    alt="디폴트"
                    width={20}
                    height={20}
                  />
                  <span className="text-[11px] text-neutral-50">
                    중복되지 않는 닉네임이어야 합니다.
                  </span>
                </p>
              </div>
              <RegistrationInput
                value={nickname}
                setValue={setNickname}
                placeholder="닉네임을 입력해주세요."
                id="nickname"
              />
            </li>
            <li className="flex flex-col gap-y-4">
              <p className="font-bold text-neutral-70">성별</p>
              <div className="flex items-center gap-x-3">
                <RoundButton
                  label="남성"
                  onClick={() => handleSelectGender(Gender.Male)}
                  isSelected={gender === Gender.Male}
                  className="text-neutral-50 px-4 py-2"
                />
                <RoundButton
                  label="여성"
                  onClick={() => handleSelectGender(Gender.Female)}
                  isSelected={gender === Gender.Female}
                  className="text-neutral-50 px-4 py-2"
                />
              </div>
            </li>
            <li className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="font-bold text-neutral-70"
              >
                휴대폰 번호
              </label>
              <PhoneNumberInput setPhoneNumber={setPhoneNumber} />
            </li>
            <li className="flex flex-col">
              <label
                htmlFor="accountNumber"
                className="font-bold text-neutral-70"
              >
                계좌 정보
              </label>
              <DropDownBoxOfBank
                options={bankName}
                onSelect={handleSelectBankName}
              />
              <RegistrationInput
                value={accountNumber}
                setValue={setAccountNumber}
                placeholder="계좌번호를 입력해주세요."
                id="accountNumber"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="oneLiner" className="font-bold text-neutral-70">
                자기 소개
              </label>
              <RegistrationInput
                value={oneLiner}
                setValue={setOneLiner}
                placeholder="나를 소개해 보세요!"
                id="oneLiner"
              />
            </li>
            <li>
              <button
                type="submit"
                className={`w-full lg:max-w-[350px] lg:mx-auto lg:block px-6 rounded-lg text-white font-semibold h-12 mt-10 mb-10 transition active:translate-y-0 border-2 focus:border-primary-80 outline-none
                ${
                  !gender ||
                  !nickname ||
                  !phoneNumber ||
                  !accountNumber ||
                  selectedBankName === "은행선택" ||
                  !imageUrl
                    ? `bg-neutral-20 text-neutral-40`
                    : `bg-primary-100 hover:-translate-y-1`
                }`}
              >
                저장하기
              </button>
            </li>
          </ul>
        </form>
      </section>
    </Page>
  );
}

export default ProfileEditPage;

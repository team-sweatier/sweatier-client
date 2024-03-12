// "use client";

function MyProfileEditPage() {
  return <div>프로필 수정 페이지!</div>;
}

export default MyProfileEditPage;

// import api from "@/api";
// import RoundButton from "@/components/Buttons/RoundButton";
// import Page from "@/components/Page";
// import { useQuery } from "@tanstack/react-query";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";
// import DropDownBoxOfBank from "../../accounts/user-registration/_components/DropDownBoxOfBank";
// import PhoneNumberInput from "../../accounts/user-registration/_components/PhoneNumberInput";
// import RegistrationInput from "../../accounts/user-registration/_components/RegistrationInput";
// import { Gender } from "../../accounts/user-registration/page";

// function ProfileEditPage() {
//   const { data: myProfile } = useQuery({
//     queryKey: ["myProfile"],
//     queryFn: api.user.getMyProfile,
//   });

//   const fetchedImageURL = `https://storage.googleapis.com/sweatier-user-profile-image/${myProfile?.userId}`;
//   // 지역상태 초기값으로 받아온 프로필 데이터 값 저장.
//   const [nickname, setNickname] = useState<string>(myProfile?.nickName);
//   const [gender, setGender] = useState<Gender | "">(myProfile?.gender);
//   const [file, setFile] = useState<File | null>();
//   const [imageUrl, setImageUrl] = useState<string | null>(fetchedImageURL);
//   const [phoneNumber, setPhoneNumber] = useState<string>(
//     myProfile?.phoneNumber
//   );
//   const [selectedBankName, setSelectedBankName] = useState<string>(
//     myProfile?.bankName
//   );
//   const [accountNumber, setAccountNumber] = useState<string>(
//     myProfile?.accountNumber
//   );
//   const [oneLiner, setOneLiner] = useState<string>(myProfile?.oneLiner);

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   const handleSubmitEditForm = () => {};

//   // 성별선택
//   const handleSelectGender = (gender: Gender) => {
//     setGender(gender);
//   };

//   // 카메라 아이콘 클릭
//   const handleClickCameraIcon = () => {
//     fileInputRef.current?.click();
//   };

//   // 이미지 선택
//   const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   // 은행명 선택
//   const handleSelectBankName = (bankName: string) => {
//     setSelectedBankName(bankName);
//   };

//   return (
//     <Page>
//       <section className="pb-3 w-full">
//         <h2 className="a11y-hidden">유저 정보 수정</h2>
//         <form
//           className="mx-auto max-w-lg py-3 px-5"
//           onSubmit={handleSubmitEditForm}
//         >
//           <p className="py-4 text-2xl font-black tracking-[-.1em]">
//             유저 정보 등록
//           </p>
//           <p className="font-bold tracking-tighter">
//             원활한 서비스 사용을 위해
//           </p>
//           <p className="font-bold tracking-tighter">
//             아래의 필수사항을 입력해주세요
//           </p>
//           <ul className="flex flex-col py-10 gap-y-7">
//             <li className="flex flex-col pb-6">
//               <div className="w-32 h-32 mx-auto relative">
//                 <div className="w-full h-full rounded-full bg-neutral-30 mx-auto flex relative overflow-hidden">
//                   {imageUrl && (
//                     <Image
//                       src={imageUrl}
//                       alt="이미지"
//                       layout="fill"
//                       objectFit="cover"
//                     />
//                   )}
//                 </div>
//                 <button type="button" onClick={handleClickCameraIcon}>
//                   <Image
//                     src="/assets/user-registration_page/camera.svg"
//                     alt="카메라"
//                     width={36}
//                     height={36}
//                     className="absolute bottom-0 right-2"
//                   />
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     onChange={handleSelectImage}
//                     className="a11y-hidden"
//                   />
//                 </button>
//               </div>
//             </li>
//             <li className="flex flex-col">
//               <div className="flex">
//                 <label htmlFor="nickname" className="font-bold text-neutral-70">
//                   닉네임
//                 </label>
//                 <p className="flex items-center">
//                   <Image
//                     src="/assets/sign-up_page/validation_default.svg"
//                     alt="디폴트"
//                     width={20}
//                     height={20}
//                   />
//                   <span className="text-xs text-neutral-40">
//                     중복되지 않는 닉네임이어야 합니다.
//                   </span>
//                 </p>
//               </div>
//               <RegistrationInput
//                 value={nickname}
//                 setValue={setNickname}
//                 placeholder="닉네임을 입력해주세요."
//                 id="nickname"
//               />
//             </li>
//             <li className="flex flex-col gap-y-4">
//               <p className="font-bold text-neutral-70">성별</p>
//               <div className="flex items-center gap-x-3">
//                 <RoundButton
//                   label="남성"
//                   onClick={() => handleSelectGender(Gender.Male)}
//                   isSelected={gender === Gender.Male}
//                   className="text-neutral-50 px-4 py-2"
//                 />
//                 <RoundButton
//                   label="여성"
//                   onClick={() => handleSelectGender(Gender.Female)}
//                   isSelected={gender === Gender.Female}
//                   className="text-neutral-50 px-4 py-2"
//                 />
//               </div>
//             </li>
//             <li className="flex flex-col">
//               <label
//                 htmlFor="phoneNumber"
//                 className="font-bold text-neutral-70"
//               >
//                 휴대폰 번호
//               </label>
//               <PhoneNumberInput setPhoneNumber={setPhoneNumber} />
//             </li>
//             <li className="flex flex-col">
//               <label
//                 htmlFor="accountNumber"
//                 className="font-bold text-neutral-70"
//               >
//                 계좌 정보
//               </label>
//               <DropDownBoxOfBank
//                 options={bankName}
//                 onSelect={handleSelectBankName}
//               />
//               <RegistrationInput
//                 value={accountNumber}
//                 setValue={setAccountNumber}
//                 placeholder="계좌번호를 입력해주세요."
//                 id="accountNumber"
//               />
//             </li>
//             <li className="flex flex-col">
//               <label htmlFor="oneLiner" className="font-bold text-neutral-70">
//                 한 줄 소개
//               </label>
//               <RegistrationInput
//                 value={oneLiner}
//                 setValue={setOneLiner}
//                 placeholder="한 줄 소개를 입력해주세요."
//                 id="oneLiner"
//               />
//             </li>
//             <li>
//               <button
//                 type="submit"
//                 className={`w-full px-6 rounded-md text-white font-semibold h-12 mt-10 mb-10 transition active:translate-y-0 border-2 focus:border-primary-80 outline-none
//           ${
//             !gender ||
//             !nickname ||
//             !phoneNumber ||
//             !accountNumber ||
//             selectedBankName === "은행선택" ||
//             !file
//               ? `bg-neutral-20 text-neutral-40`
//               : `bg-primary-100 hover:-translate-y-1`
//           }`}
//               >
//                 등록하기
//               </button>
//             </li>
//           </ul>
//         </form>
//       </section>
//     </Page>
//   );
// }

// export default ProfileEditPage;

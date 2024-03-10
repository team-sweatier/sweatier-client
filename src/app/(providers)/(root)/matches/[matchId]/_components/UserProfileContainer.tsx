import defaultProfileImg from "@/../public/assets/match_detail_page/default-profile.jpeg";
import Image from "next/image";

function UserProfileContainer() {
  return (
    <div className="border border-none bg-primary-20 text-sm rounded-lg w-full dark:bg-natural-50 dark:border-natural-50 dark:text-white p-5 items-center flex">
      <Image
        src={defaultProfileImg}
        alt="user-profile-image"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="pl-8">
        <div className="pb-2 font-bold">닉네임</div>
        <div className="text-xs">한줄 자기소개</div>
      </div>
    </div>
  );
}

export default UserProfileContainer;

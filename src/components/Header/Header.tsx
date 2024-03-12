"use client";

import LogInModal from "@/app/(providers)/(root)/accounts/_components/LogInModal";
import { useAuthStore, useModalStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBox from "./components/SearchBox";

function Header() {
  const modal = useModalStore();
  const router = useRouter();
  const { isLoggedIn, logOut, logIn } = useAuthStore();
  const handleClickLogInButton = () => {
    modal.open(<LogInModal />);
  };

  // const handleClickLogOutButton = () => {
  //   logOut();
  //   alert("로그아웃 처리 되었습니다."); //toastify 적용 예정
  // };

  const handleClickMyPageButton = () => {
    router.push("/my-page");
  };

  return (
    <header className="border shadow-sm ">
      <div className="px-5 py-4 mx-auto max-w-screen-md flex w-full items-center h-16 justify-between">
        <Link href="/" className="font-bold text-xl">
          Sweatier
        </Link>
        <div className="flex-grow mx-4 sm:mx-8 md:mx-16 md:h-full h-7">
          <SearchBox />
        </div>

        {isLoggedIn ? (
          <button
            onClick={handleClickMyPageButton}
            className="font-bold text-sm text-primary-100 flex justify-end w-8 h-8"
          >
            <Image
              src="assets/commons/myProfile.svg"
              alt="프로필 아이콘"
              width={32}
              height={32}
            />
          </button>
        ) : (
          <button
            onClick={handleClickLogInButton}
            className="font-bold w-14 text-sm text-primary-100"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

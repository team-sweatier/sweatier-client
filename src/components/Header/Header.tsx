"use client";

import mypageIcon from "@/../public/assets/commons/mypage.svg";
import LogInModal from "@/app/(providers)/(root)/accounts/_components/LogInModal";
import { useAuthStore, useModalStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./components/SearchBox";

function Header() {
  const modal = useModalStore();
  const { isLoggedIn, logOut, logIn } = useAuthStore();
  const handleClickLogInButton = () => {
    modal.open(<LogInModal />);
  };

  // useEffect(() => {
  //   // 쿠키의 존재 유무 => 로그인 상태 업데이트
  //   const accessToken = document.cookie
  //     .split(";")
  //     .find((item) => item.startsWith("accessToken="))
  //     ?.split("=")[1];

  //   if (accessToken) {
  //     logIn();
  //   }
  // }, [logIn]);

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
          <Link href={"/my-page"} className="w-14 flex justify-end">
            <Image
              src={mypageIcon}
              alt="mypageIcon"
              width={32}
              height={32}
              sizes="100vw"
              style={{
                width: "70%",
                height: "auto",
              }}
            />
          </Link>
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

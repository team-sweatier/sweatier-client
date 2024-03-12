"use client";

import mypageIcon from "@/../public/assets/commons/mypage.svg";
import LogInModal from "@/app/(providers)/(root)/accounts/_components/LogInModal";
import { useAuthStore, useModalStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import Authentication from "../Authentication";
import SearchBox from "./components/SearchBox";

function Header() {
  const modal = useModalStore();
  const { isLoggedIn, logIn } = useAuthStore();

  console.log(isLoggedIn);
  const handleClickLogInButton = () => {
    modal.open(<LogInModal />);
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
        <Authentication>
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
        </Authentication>
      </div>
    </header>
  );
}

export default Header;

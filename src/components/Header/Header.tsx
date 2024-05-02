"use client";

import logo from "@/../public/assets/commons/logo.png";
import profile from "@/../public/assets/commons/profile.png";
import LogInModal from "@/app/(providers)/(root)/accounts/_components/LogInModal";
import { useModalStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import AuthWrapper from "../AuthWrapper";
import SearchBox from "./components/SearchBox";

function Header() {
  const modal = useModalStore();

  const handleClickLogInButton = () => {
    modal.open(<LogInModal />);
  };

  return (
    <header className="border shadow-sm ">
      <div className="px-5 py-4 mx-auto max-w-screen-md flex w-full items-center h-16 justify-between">
        <Link href="/" className="font-bold text-xl">
          <Image src={logo} alt="logo" priority width={107} height={33} />
        </Link>
        <div className="flex-grow mx-4 sm:mx-8 md:mx-16 md:h-full h-7">
          <SearchBox />
        </div>
        <AuthWrapper
          loggedInElement={
            <Link href={"/my-page"} className="w-14 flex justify-end">
              <Image src={profile} alt="profile" priority />
            </Link>
          }
          notLoggedInElement={
            <button
              onClick={handleClickLogInButton}
              className="font-bold w-14 text-sm text-primary-100"
            >
              로그인
            </button>
          }
        />
      </div>
    </header>
  );
}

export default Header;

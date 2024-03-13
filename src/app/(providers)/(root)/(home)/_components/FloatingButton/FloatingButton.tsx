"use client";

import floating from "@/../public/assets/main_page/floating.svg";
import { useAuthStore } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

function FloatingButton() {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const handleClickButton = () => {
    if (isLoggedIn) {
      router.push("/match/create");
    } else {
      alert("로그인이 필요합니다.");
    }
  };
  return (
    <div className="z-30 sticky bottom-6 flex justify-end items-end h-[50%]">
      <div
        onClick={handleClickButton}
        className="sm:w-[78px] sm:h-[78px] w-14 h-14 hover:scale-105 transition-all hover:cursor-pointer"
      >
        <Image
          src={floating}
          width={78}
          height={78}
          alt="carousel-image"
          priority
        />
      </div>
    </div>
  );
}

export default FloatingButton;

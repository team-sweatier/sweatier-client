"use client";

import floating from "@/../public/assets/main_page/floating.png";
import { useAuth } from "@/contexts/auth.context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FloatingButton() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const handleClickButton = () => {
    if (isLoggedIn) {
      router.push("/match/create");
    } else {
      toast.info("로그인이 필요한 서비스입니다.");
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

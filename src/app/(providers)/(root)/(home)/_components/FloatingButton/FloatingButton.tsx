"use client";

import floating from "@/../public/assets/main_page/floating.svg";
import Image from "next/image";
import Link from "next/link";

function FloatingButton() {
  return (
    <div className="z-30 sticky bottom-6 flex justify-end items-end h-[50%]">
      <Link
        href="/match/create"
        className="sm:w-[78px] sm:h-[78px] w-14 h-14 hover:scale-105 transition-all"
      >
        <Image
          src={floating}
          width={78}
          height={78}
          alt="carousel-image"
          priority
        />
      </Link>
    </div>
  );
}

export default FloatingButton;

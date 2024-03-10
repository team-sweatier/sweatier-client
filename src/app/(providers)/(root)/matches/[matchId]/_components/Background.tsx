import tennisBannel from "@/../public/assets/match_detail_page/bannels/bannel_tennis_mobile.svg";
import Image from "next/image";
import { PropsWithChildren } from "react";

function Background({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={tennisBannel}
        layout="relative"
        objectFit="cover"
        alt="Tennis background Image"
        className="w-full"
      />
      {children}
    </div>
  );
}

export default Background;

import tennisBannel from "@/../public/assets/match_detail_page/bannels/bannel_tennis_mobile.svg";
import Image from "next/image";
import { PropsWithChildren } from "react";
import OverlayBackground from "./OverlayBackground";

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
      <OverlayBackground>{children}</OverlayBackground>
    </div>
  );
}

export default Background;

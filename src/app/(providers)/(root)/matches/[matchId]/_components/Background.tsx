import tennisBannel from "@/../public/assets/match_detail_page/bannels/bannel_tennis_mobile.svg";
import Image from "next/image";
import { PropsWithChildren } from "react";

function Background({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image src={tennisBannel} layout="fill" objectFit="cover" alt="Tennis" />
      <div className="absolute inset-0 bg-black bg-opacity-50">{children}</div>
    </div>
  );
}

export default Background;

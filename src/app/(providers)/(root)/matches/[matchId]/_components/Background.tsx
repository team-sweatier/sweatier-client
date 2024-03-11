import { matchBanner } from "@/utils/matchBanner";
import Image from "next/legacy/image";
import { PropsWithChildren } from "react";
import OverlayBackground from "./OverlayBackground";

function Background({ children }: PropsWithChildren) {
  const matchSportType = "badminton";
  const matchSportBannerSrc = matchBanner[matchSportType];

  return (
    <div className="relative h-full w-full overflow-y-auto scrollbar-hide">
      <Image
        src={matchSportBannerSrc}
        layout="fill"
        objectFit="cover"
        alt={`${matchSportType} background image`}
        priority
      />
      <OverlayBackground>{children}</OverlayBackground>
    </div>
  );
}

export default Background;

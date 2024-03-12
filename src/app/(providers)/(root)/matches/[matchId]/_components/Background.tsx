import { matchBanner } from "@/utils/matchBanner";
import Image from "next/legacy/image";
import { PropsWithChildren } from "react";
import OverlayBackground from "./OverlayBackground";

interface BackgroundProps {
  sportType: string;
}

function Background({
  sportType,
  children,
}: PropsWithChildren<BackgroundProps>) {
  //todo : matchSportType --> 경기 종목 (sport)
  const matchSportType = sportType || "tennis";
  const matchSportBannerSrc = matchBanner[matchSportType];

  return (
    <div className="relative h-full w-full overflow-y-auto scrollbar-hide">
      <Image
        src={matchSportBannerSrc}
        sizes="100vw"
        priority
        objectFit="cover"
        alt="Tennis background Image"
        className="w-full"
      />
      <OverlayBackground>{children}</OverlayBackground>
    </div>
  );
}

export default Background;

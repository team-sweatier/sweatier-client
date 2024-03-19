import { matchBannerPath } from "@/utils/matchPatchs";
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
  const matchSportType = sportType || "tennis";
  const matchSportBannerSrc = matchBannerPath[matchSportType];

  return (
    <div className="relative w-full scrollbar-hide">
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

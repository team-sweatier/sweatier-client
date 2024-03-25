"use client";
import { isMatchDetail } from "@/components/MatchCard/MatchCard";
import { useProfile } from "@/contexts/profile.context";
import { useTiers } from "@/contexts/tiers.context";
import { Match, MatchDetail } from "@/types/match.response.type";
import { availableButtonClassName } from "@/utils/availableButtonClassName";
import getMatchAvailableInfo from "@/utils/getMatchAvailableInfo";
import isUserParticipating from "@/utils/isUserParticipating";
import Image from "next/image";

function AvailabilityButton({ match }: { match: MatchDetail | Match }) {
  let matchTier: string;
  let sportsType: string;
  const userTiers = useTiers();
  const profile = useProfile();
  const userId = profile?.id;
  const hasApplied = userId
    ? isUserParticipating(match as MatchDetail, userId)
    : false;

  if (isMatchDetail(match)) {
    matchTier = match.tierType;
    sportsType = match.sportsType.name;
  } else {
    matchTier = match.tier;
    sportsType = match.sportsType[0];
  }
  const isSameTier = userTiers ? userTiers[sportsType] === matchTier : true;

  const applyState = getMatchAvailableInfo(
    match.applicants,
    match.capability,
    hasApplied,
    isSameTier
  );

  const imagePath: { [key: string]: string } = {
    "신청 가능": "/assets/main_page/event_available.svg",
    "마감 임박": "/assets/main_page/alarm.svg",
  };

  const baseClass =
    "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center";
  const conditionClass = availableButtonClassName(applyState);

  return (
    <div className={`${conditionClass} ${baseClass}`}>
      {imagePath[applyState] && (
        <div>
          <Image
            src={imagePath[applyState]}
            width={10}
            height={12}
            alt="alarm-image"
          />
        </div>
      )}
      <span className="text-[10px] font-bold">{applyState}</span>
    </div>
  );
}

export default AvailabilityButton;

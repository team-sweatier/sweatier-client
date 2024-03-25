"use client";
import { isMatchDetail } from "@/components/MatchCard/MatchCard";
import { useProfile } from "@/contexts/profile.context";
import { useTiers } from "@/contexts/tiers.context";
import { Match, MatchDetail } from "@/types/match.response.type";
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
  const isAvailableGender = profile ? profile.gender === match.gender : true;

  const applyState = getMatchAvailableInfo(
    match.applicants,
    match.capability,
    hasApplied,
    isSameTier,
    isAvailableGender
  );

  const imagePath: { [key: string]: string } = {
    "신청 가능": "/assets/main_page/event_available.svg",
    "마감 임박": "/assets/main_page/alarm.svg",
  };

  const baseClass =
    "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center";

  let conditionClass = "";

  switch (applyState) {
    case "신청 가능":
      conditionClass = "border border-primary-100 text-primary-100";
      break;
    case "마감":
      conditionClass = "bg-[#E7E7E7] text-[#9BA2A8]";
      break;

    case "마감 임박":
      conditionClass = "border border-warning text-warning";
      break;

    case "신청 완료":
      conditionClass = "bg-neutral-80 text-white";
      break;

    case "신청 불가":
      conditionClass = "bg-[#E7E7E7] text-[#9BA2A8]";
      break;
  }

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

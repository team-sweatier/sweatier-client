import AvailabilityButton from "@/components/Buttons/AvailabilityButton";
import { Match } from "@/types/Match.type";
import { MatchDetail } from "@/types/match.response.type";
import day from "@/utils/day";

import getMatchAvailableInfo from "@/utils/getMatchAvailableInfo";
import translateGender from "@/utils/translateGender";
import Link from "next/link";

function MatchCard({
  match,
  className,
  isFinished,
}: {
  match: MatchDetail | Match;
  className?: string;
  isFinished?: boolean;
}) {
  const teamCapability = match.capability / 2;
  const gender = translateGender(match.gender);
  const matchDay = day(match.matchDay);
  const matchAvailableInfo = getMatchAvailableInfo(match);

  return (
    <Link href={`/matches/${match.id}`}>
      <div
        className={`px-5 relative py-4 rounded-[10px] flex flex-col gap-y-4 shadow border-solid ${className}`}
      >
        {isFinished ? (
          <div className="font-bold text-neutral-90">
            {matchDay.format("M월 DD일 ddd요일 HH:mm")}
          </div>
        ) : (
          <div className="font-bold text-neutral-90">
            {matchDay.format("HH:mm")}
          </div>
        )}
        <div className="text-sm">{match.title}</div>
        <div className="text-[11px] flex justify-between">
          <span className="text-neutral-60">{`${gender} | ${teamCapability}vs${teamCapability} | ${match.tier}`}</span>
          <AvailabilityButton
            imagePath={matchAvailableInfo.imagePath}
            label={matchAvailableInfo.label}
          />
        </div>
      </div>
    </Link>
  );
}

export default MatchCard;

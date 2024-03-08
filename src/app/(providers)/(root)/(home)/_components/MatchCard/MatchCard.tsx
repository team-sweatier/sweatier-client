import AvailabilityButton from "@/components/AvailabilityButton";
import { Match } from "@/types/Match.type";
import getMatchAvailableInfo from "@/utils/getMatchAvailableInfo";
import translateGender from "@/utils/translateGender";
import Link from "next/link";

function MatchCard({ match }: { match: Match }) {
  const teamCapability = match.capability / 2;
  const gender = translateGender(match.gender);

  const matchAvailableInfo = getMatchAvailableInfo(match);
  return (
    <Link href={`/match/${match.id}`}>
      <div className="px-5 relative py-4 rounded-[10px] flex flex-col gap-y-4 shadow border-solid">
        <div className="font-bold">{match.matchTime}</div>
        <div className="text-[14px]">{match.address}</div>
        <div className="text-[11px] flex justify-between">
          <span className="text-neutral-60">{`${gender} | ${teamCapability}vs${teamCapability} | ${match.tierId}`}</span>
          <AvailabilityButton
            imagePath={matchAvailableInfo.imagePath}
            label={matchAvailableInfo.label}
            className={matchAvailableInfo.className}
          />
        </div>
      </div>
    </Link>
  );
}

export default MatchCard;

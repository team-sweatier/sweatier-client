import { Match } from "@/types/Match.type";

import translateGender from "@/utils/translateGender";
import Link from "next/link";
import { PropsWithChildren } from "react";

type MyMatchCardProps = PropsWithChildren<{
  match: Match;
  className?: string;
}>;

function MyMatchCard({ match, className, children }: MyMatchCardProps) {
  const teamCapability = match.capability / 2;
  const gender = translateGender(match.gender);

  return (
    <Link href={`/matches/${match.id}`}>
      <div
        className={`px-5 relative py-4 rounded-[10px] flex flex-col gap-y-4 shadow border-solid ${className}`}
      >
        <div className="font-bold">{match.matchTime}</div>
        <div className="text-sm">{match.address}</div>
        <div className="text-[11px] flex justify-between">
          {/* <span className="text-neutral-60">{`${gender} | ${teamCapability}vs${teamCapability} | ${match.tierId}`}</span> */}
          {children}
        </div>
      </div>
    </Link>
  );
}

export default MyMatchCard;

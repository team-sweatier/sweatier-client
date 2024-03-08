import { Match } from "@/types/Match.type";

import Link from "next/link";

function MatchCard({ match }: { match: Match }) {
  const teamCapability = match.capability / 2;

  return (
    <Link href={`/match/${match.id}`}>
      <div className="px-5 relative py-4 rounded-[10px] flex flex-col gap-y-4 shadow border-solid">
        <div className="font-bold">{match.matchTime}</div>
        <div className="text-[14px]">{match.address}</div>
        <div className="text-[11px] flex justify-between"></div>
      </div>
    </Link>
  );
}

export default MatchCard;

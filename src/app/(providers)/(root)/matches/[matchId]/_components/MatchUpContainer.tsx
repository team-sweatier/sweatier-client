"use client";
import { useProfile } from "@/contexts/profile.context";
import translateSportType from "@/utils/translateMatches/translateSportType";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ApplyButton from "./ApplyButton";

dayjs.locale("ko");

function MatchUpContainer({ match, matchId }: { match: any; matchId: string }) {
  const profile = useProfile();
  const isUserPost = profile && match.hostId === profile.id;

  const { sportType, matchDay, title, content } = match;

  const matchDate = dayjs(matchDay).format("M월 D일 dddd");
  const matchTime = dayjs(matchDay).format("hh:mm");

  return (
    <div>
      <div className="text-neutral-70 font-bold text-sm pb-3">
        {translateSportType(sportType[0])}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-90 font-bold text-xl gap-x-4 flex pb-3">
            <span>{matchTime}</span>
            <span>{matchDate}</span>
          </div>
          <div className="text-neutral-90 text-xl">{title}</div>
        </div>

        {!isUserPost && <ApplyButton match={match} matchId={matchId} />}
      </div>
      <div className="mt-6 pb-8 text-neutral-70 tex-sm leading-7">
        {content}
      </div>
    </div>
  );
}

export default MatchUpContainer;

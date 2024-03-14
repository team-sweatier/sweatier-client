"use client";
import { useAuthStore } from "@/store";
import translateSportType from "@/utils/translateMatches/translateSportType";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ApplyButton from "./ApplyButton";

dayjs.locale("ko");

function MatchUpContainer({ match, matchId }: { match: any; matchId: string }) {
  const { userId } = useAuthStore();
  const isUserPost = match.hostId === userId;

  const { sportType, matchDay, title, content } = match;

  const matchDate = dayjs(matchDay).format("M월 D일 dddd");
  const matchTime = dayjs(matchDay).format("hh:mm");

  return (
    <div className="bg-red-300">
      <div className="text-neutral-70 font-bold text-base pb-2">
        {translateSportType(sportType[0])}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-90 font-bold text-xl gap-x-3 flex pb-2">
            <span>{matchTime}</span>
            <span>{matchDate}</span>
          </div>
          <div className="text-neutral-90 text-xl">{title}</div>
        </div>
        {!isUserPost && <ApplyButton match={match} matchId={matchId} />}
      </div>
      <div className="mt-4 pb-6 text-neutral-70 tex-sm leading-7">
        {content}
      </div>
    </div>
  );
}

export default MatchUpContainer;

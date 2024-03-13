"use client";
import { useAuthStore } from "@/store";
import translateSportType from "@/utils/translateMatches/translateSportType";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ApplyButton from "./ApplyButton";

dayjs.locale("ko");

function MatchUpContainer({ match, matchId }: { match: any; matchId: string }) {
  const { sportType, matchDay, title, content } = match;
  const matchDate = dayjs(matchDay).format("M월 D일 dddd");
  const matchTime = dayjs(matchDay).format("hh:mm");

  const { userId } = useAuthStore();
  const isUserPost = match.hostId === userId;

  // 현재 날짜 및 시간
  const now = dayjs();
  const matchDayDate = dayjs(matchDay);

  const isAbledApply = !matchDayDate.isBefore(now);
  console.log("isAbledApply :", isAbledApply);

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

        {!isUserPost && (
          <ApplyButton isAbledApply={isAbledApply} matchId={matchId} />
        )}
      </div>
      <div className="mt-6 pb-8 text-neutral-70 tex-sm leading-7">
        {content}
      </div>
    </div>
  );
}

export default MatchUpContainer;

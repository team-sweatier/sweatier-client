import translateSportType from "@/utils/translateMatches/translateSportType";
import dayjs from "dayjs";
import ApplyButton from "./ApplyButton";

function MatchUpContainer({ match, matchId }: { match: any; matchId: string }) {
  const { sportType, matchDay, title, content } = match;
  const matchDate = dayjs(matchDay).format("M월 D일 dddd");
  const matchTime = dayjs(matchDay).format("h:mm");

  const isUserPost = false; //todo

  return (
    <div>
      <div className="text-neutral-70 font-bold text-sm pb-3">
        {translateSportType(sportType)}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-90 font-bold text-xl gap-x-4 flex pb-3">
            <span>{matchTime}</span>
            <span>{matchDate}</span>
          </div>
          <div className="text-neutral-90 text-xl">{title}</div>
        </div>

        {!isUserPost && <ApplyButton isAbledApply={true} matchId={matchId} />}
      </div>
      <div className="mt-6 pb-8 text-neutral-70 tex-sm leading-7">
        {content}
      </div>
    </div>
  );
}

export default MatchUpContainer;

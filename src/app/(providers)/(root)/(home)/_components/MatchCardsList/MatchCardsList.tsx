import MatchCard from "@/components/MatchCard";
import useFilterStore from "@/store/filter.store";
import { Match } from "@/types/Match.type";

// todo 임시데이터 수정
const match: Match = {
  id: "matchId",
  hostId: "hostId",
  title: "농구할 사람",
  content: "농구농구농구농구농구",
  capability: 6,
  address: "장충 체육관",
  matchDay: new Date("2024-03-14T13:00:00"),
  gender: "both",
  tierId: "세미 프로",
  createdAt: new Date(),
  updatedAt: new Date(),
  sportsTypeId: "농구",
  applicants: 2,
  matchTime: "13:00",
};

function MatchCardsList() {
  const { date, region, sports } = useFilterStore();
  const matchList = [match, match, match, match];

  return (
    <ul className="flex flex-col gap-y-4 sm:gap-8">
      {matchList.map((match, index) => (
        <li key={index}>
          <MatchCard match={match} />
        </li>
      ))}
    </ul>
  );
}

export default MatchCardsList;

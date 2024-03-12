import { Match } from "@/types/Match.type";
import MyMatchCard from "./MyMatchCard";
import TierButton from "./TierButton";

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

type tierLabel = "티어 평가하기" | "받은 티어평가 보기";

//todo : 유저가 해당 게시물에 tier 평가를 했다면 "받은 티어 평가 보기" -> 티어 조회 페이지로 이동 / 안했다면 "티어 평가하기" -> 티어 평가하기 페이지로 이동
//todo : Link 요소로 버튼 감싸기! 페이지별 경로 물어보기

function MyMatchLists() {
  const matchList = [match, match];
  const tierLabelType: tierLabel = "받은 티어평가 보기";

  return (
    <div className="my-4 px-4 border-primary-20 pt-8">
      <div className="flex font-bold text-base gap-x-4 mb-8">
        <div className="text-neutral-90">경기내역 조회</div>
        <div className="text-primary-100">3.4 월</div>
      </div>

      <div className="">
        <ul className="flex flex-col gap-y-4 sm:gap-8">
          {matchList.map((match, index) => (
            <li key={index}>
              <MyMatchCard match={match} className="">
                <TierButton label={tierLabelType} />
              </MyMatchCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyMatchLists;

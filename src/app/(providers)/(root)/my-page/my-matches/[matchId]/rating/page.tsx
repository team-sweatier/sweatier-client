import Heading from "@/components/Heading";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import { Match } from "@/types/Match.type";
import RatingCardsList from "./_components/RatingCardsList";

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

function RatingPage() {
  return (
    <Page>
      <div className="w-full px-1">
        <MatchCard match={match} />
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      <Heading className="sm:text-xl text-sm w-full mb-6 ">
        티어평가 하기
      </Heading>
      <RatingCardsList />
    </Page>
  );
}

export default RatingPage;

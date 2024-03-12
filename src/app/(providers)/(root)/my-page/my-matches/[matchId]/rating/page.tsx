"use client";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import { Match } from "@/types/Match.type";
import participantDto from "@/types/participantDto";
import RatingForm from "./_components/RatingForm";

const match: Match = {
  id: "matchId",
  hostId: "hostId",
  title: "농구할 사람",
  content: "농구농구농구농구농구",
  capability: 6,
  address: "장충 체육관",
  matchDay: new Date("2024-03-14T13:00:00"),
  gender: "both",
  tier: "세미 프로",
  createdAt: new Date(),
  updatedAt: new Date(),
  sportsTypeId: "농구",
  applicants: 2,
  matchTime: "13:00",
};

const participants: participantDto[] = [
  { userId: "1", nickname: "닉네임1" },
  { userId: "2", nickname: "닉네임3" },
  { userId: "3", nickname: "닉네임3" },
];

function RatingPage() {
  return (
    <Page>
      <div className="w-full px-1">
        <MatchCard match={match} />
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      <RatingForm participants={participants} />
    </Page>
  );
}

export default RatingPage;

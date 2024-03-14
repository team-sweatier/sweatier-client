"use client";
import api from "@/api";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import { useEffect, useState } from "react";
import RatingCheckCardsList from "./_components/RatingCheckCardsList";
function RatingCheckPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;
  const [match, setMatch] = useState<any>();
  const [myRatings, setMyRatings] = useState();
  const getRatingInfo = async () => {
    const [match, myRatings] = await Promise.all([
      api.match.getMatch(matchId),
      api.rating.checkMyRatings(matchId),
    ]);
    setMatch(match);
    setMyRatings(myRatings);
  };
  useEffect(() => {
    getRatingInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page>
      <div className="w-full px-1">
        {match && <MatchCard isFinished match={match} />}
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      {myRatings && <RatingCheckCardsList myRatings={myRatings} />}
    </Page>
  );
}
export default RatingCheckPage;

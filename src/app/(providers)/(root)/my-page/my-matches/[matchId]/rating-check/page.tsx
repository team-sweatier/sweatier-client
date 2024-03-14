import api from "@/api";
import { MyRatings } from "@/api/rating/rating.dto";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import RatingCheckCardsList from "./_components/RatingCheckCardsList";

async function RatingCheckPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;

  const match = await api.match.getMatch(matchId);
  // const myRatings: MyRatings[] = await api.rating.checkMyRatings(matchId);

  const myRatings: MyRatings[] = [
    { raterId: "rater1", value: 1 },
    {
      raterId: "rater2",
      value: 2,
    },
    { raterId: "rater3", value: 3 },
  ];
  return (
    <Page>
      <div className="w-full px-1">
        <MatchCard isFinished match={match} />
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      <RatingCheckCardsList myRatings={myRatings} />
    </Page>
  );
}

export default RatingCheckPage;

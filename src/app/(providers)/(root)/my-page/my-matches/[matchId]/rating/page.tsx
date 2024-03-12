import api from "@/api";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import { MatchDetail } from "@/types/match.response.type";
import participantDto from "@/types/participantDto";
import RatingForm from "./_components/RatingForm";

async function RatingPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;
  const match: MatchDetail = await api.match.getMatch(matchId);
  const participants: participantDto[] = match.participants;

  return (
    <Page>
      <div className="w-full px-1">
        <MatchCard match={match} />
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      <RatingForm participants={participants} matchId={matchId} />
    </Page>
  );
}

export default RatingPage;

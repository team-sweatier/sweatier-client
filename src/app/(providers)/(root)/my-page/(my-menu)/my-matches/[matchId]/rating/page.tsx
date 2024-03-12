import api from "@/api";
import MatchCard from "@/components/MatchCard";
import Page from "@/components/Page";
import RatingForm from "./_components/RatingForm";

async function RatingPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;
  const match: any = await api.match.getMatch(matchId);
  const participants: any[] = match.participants;
  // const participants: participantDto[] = match.participants.filter(
  //   (participant) => participant.id !== userId
  // );

  return (
    <Page>
      <div className="w-full px-1">
        <MatchCard isFinished match={match} />
      </div>
      <div className="w-screen sm:w-full border-b-4 border-primary-20 my-6" />
      <RatingForm participants={participants} matchId={matchId} />
    </Page>
  );
}

export default RatingPage;

import api from "@/api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import EditMatchForm from "./_components/EditMatchForm";

async function EditMatchPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;
  const editValues = await api.match.getMatchesByMatchId(matchId);
  if (!editValues) return null;

  return (
    <Page>
      <div className="w-full relative">
        <Heading>게시물 수정</Heading>
        <EditMatchForm matchId={matchId} editValues={editValues} />
      </div>
    </Page>
  );
}

export default EditMatchPage;

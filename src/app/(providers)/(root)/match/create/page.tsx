import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

function CreateMatchPage() {
  return (
    <Page>
      <div className="w-full max-w-screen-md">
        <Heading>게시물 작성</Heading>
        <MatchForm />
      </div>
    </Page>
  );
}

export default CreateMatchPage;

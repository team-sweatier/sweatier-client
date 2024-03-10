import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

const CreateMatchPage = () => {
  return (
    <Page>
      <div className="w-full relative">
        <Heading>게시물 작성</Heading>
        <MatchForm />
      </div>
    </Page>
  );
};

export default CreateMatchPage;

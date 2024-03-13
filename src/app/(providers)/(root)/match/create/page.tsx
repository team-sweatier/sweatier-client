import Heading from "@/components/Heading";
import Page from "@/components/Page";
import CreateMatchForm from "./_components/CreateMatchForm";

const CreateMatchPage = () => {
  return (
    <Page>
      <div className="w-full relative">
        <Heading>게시물 작성</Heading>
        <CreateMatchForm />
      </div>
    </Page>
  );
};

export default CreateMatchPage;

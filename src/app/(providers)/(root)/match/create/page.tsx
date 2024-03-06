import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Page from "@/components/Page";

function CreateMatchPage() {
  return (
    <Page>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 py-6">
          Match 생성 페이지
        </h2>
        <MatchForm />
      </div>
    </Page>
  );
}

export default CreateMatchPage;

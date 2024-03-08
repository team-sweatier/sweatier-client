import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { KAKAO_SDK_URL } from "@/config";
import Script from "next/script";

const CreateMatchPage = () => {
  return (
    <body>
      <Page>
        <div className="w-full max-w-screen-md">
          <Heading>게시물 작성</Heading>
          <MatchForm />
        </div>
      </Page>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
    </body>
  );
};

export default CreateMatchPage;

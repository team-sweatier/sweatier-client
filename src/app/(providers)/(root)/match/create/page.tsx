import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { NextPage } from "next";
import Script from "next/script";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const CreateMatchPage: NextPage = () => {
  return (
    <Page>
      <Script strategy="beforeInteractive" src={KAKAO_SDK_URL} />
      <div className="w-full max-w-screen-md">
        <Heading>게시물 작성</Heading>
        <MatchForm />
      </div>
    </Page>
  );
};

export default CreateMatchPage;

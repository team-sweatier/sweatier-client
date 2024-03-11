import MatchForm from "@/components/Forms/MatchForm/MatchForm";
import Page from "@/components/Page";
import { MatchResonseType } from "@/types/match.response.type";

//todo: 임시 수정 데이터
const editValues: MatchResonseType = {
  sportsType: "tennis",
  title: "기존 제목",
  content: "기존 내용",
  applicants: 1,
  capability: 2,
  gender: "female",
  matchDay: new Date(2024, 3, 12, 15, 30),
  keyword: "매현시민의 숲 테니스장",
  address: "서울 서초구 매헌로 99",
  latitude: 37.4730498033959,
  longitude: 127.036977084936,
};

function EditMatchPage() {
  return (
    <Page>
      <h2>Match 수정 페이지</h2>
      <MatchForm editValues={editValues} />
    </Page>
  );
}

export default EditMatchPage;

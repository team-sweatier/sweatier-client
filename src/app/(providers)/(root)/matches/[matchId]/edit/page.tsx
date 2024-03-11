import Page from "@/components/Page";
import { MatchResonseType } from "@/types/match.response.type";
import EditMatchForm from "./_components/EditMatchForm";

//todo: 임시 수정 데이터
const editValues: MatchResonseType = {
  sport: "tennis",
  title: "매헌시민의 숲 테니스장",
  content:
    "함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요!",
  applicants: 1,
  capability: 2,
  gender: "female",
  matchDay: new Date(2024, 3, 12, 19, 30),
  keyword: "매현시민의 숲 테니스장",
  address: "서울 서초구 매헌로 99",
  latitude: 37.4730498033959,
  longitude: 127.036977084936,
};

function EditMatchPage() {
  return (
    <Page>
      <h2>Match 수정 페이지</h2>
      <EditMatchForm editValues={editValues} />
    </Page>
  );
}

export default EditMatchPage;

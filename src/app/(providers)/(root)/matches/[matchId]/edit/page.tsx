import Heading from "@/components/Heading";
import Page from "@/components/Page";
import EditMatchForm from "./_components/EditMatchForm";

//todo: 임시 수정 데이터
const editValues: any = {
  sport: "tennis",
  title: "매헌시민의 숲 테니스장",
  content:
    "함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요!",
  applicants: 1,
  capability: 4,
  gender: "female",
  matchDay: new Date(2024, 3, 15, 21, 30),
  keyword: "매현시민의 숲 테니스장",
  address: "서울 서초구 매헌로 99",
  latitude: 37.4730498033959,
  longitude: 127.036977084936,
};

function EditMatchPage() {
  return (
    <Page>
      <div className="w-full relative">
        <Heading>게시물 수정</Heading>
        <EditMatchForm editValues={editValues} />
      </div>
    </Page>
  );
}

export default EditMatchPage;

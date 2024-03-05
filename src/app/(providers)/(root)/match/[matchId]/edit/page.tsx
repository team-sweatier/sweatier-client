import MatchForm from "@/components/MatchForm";
import MatchDto from "@/types/MatchDto";

//todo: 임시 수정 데이터
const editValues: MatchDto = {
  title: "기존 제목",
  content: "기존 내용",
  players: "2명",
  gender: "혼성",
  date: "2024-03-05",
  time: "15:00",
  place: "서울",
};

function EditMatchPage() {
  return (
    <div>
      <h2>Match 수정 페이지</h2>
      <MatchForm editValues={editValues} />
    </div>
  );
}

export default EditMatchPage;

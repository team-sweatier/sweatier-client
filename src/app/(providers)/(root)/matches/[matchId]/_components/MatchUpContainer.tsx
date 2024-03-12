import ApplyButton from "./ApplyButton";

//todo : date, time 포매팅하기
const temporaryData = {
  sport: "테니스",
  time: "7:30",
  date: "3월 12일 화요일",
  title: "매헌시민의 숲 테니스장",
  content:
    "함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요. 함께 테니스 치실 분 모집합니다. 참가신청 해주세요. ",
};

interface MatchUpContainerProps {
  isUserPost: boolean;
  sport: string;
  time: string;
  date: string;
  title: string;
  content: string;
}

function MatchUpContainer({
  isUserPost,
  sport,
  time,
  date,
  title,
  content,
}: MatchUpContainerProps) {
  //todo : 게시물의 글 정보 가져오기
  return (
    <div>
      <div className="text-neutral-70 font-bold text-sm pb-3">
        {temporaryData.sport}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-90 font-bold text-xl gap-x-4 flex pb-3">
            <span>{time}</span>
            <span>{date}</span>
          </div>
          <div className="text-neutral-90 text-xl">{title}</div>
        </div>

        {!isUserPost && <ApplyButton isAbledApply={true} />}
      </div>
      <div className="mt-6 pb-8 text-neutral-70 tex-sm leading-7">
        {content}
      </div>
    </div>
  );
}

export default MatchUpContainer;

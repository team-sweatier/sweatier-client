import api from "@/api";
import translateMatchAvailable from "@/utils/translateMatches/translateMatchAvailable";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import AccountContainer from "./_components/AccountContainer";
import Background from "./_components/Background";
import GetKakaoMap from "./_components/GetKakaoMap";
import MatchApplyButton from "./_components/MatchApplyButton";
import MatchRuleContainer from "./_components/MatchRuleContainer";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import UserPostControlButtons from "./_components/UserPostControlButtons";
import UserProfileContainer from "./_components/UserProfileContainer";

dayjs.locale("ko");

async function MatchDetailPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;
  const match = await api.match.getMatchesByMatchId(matchId);
  if (!match) return null;

  console.log(match);

  /*
* todo List

* 2. 로그인한 유저 id와 hostId 비교 -> 수정/삭제 모드 or 신청 모드 변환 (isUserPost)

* 5. 신청 가능 상태일 경우 -> 신청 모달 (post 요청) (🔥 participating)


* 8. match any -> 타입 정의

*/

  //* 해당 post가 유저가 작성한 글인지 판별하는 임시 변수
  const isUserPost = false;

  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start min-h- relative">
      <Background sportType={match["sportType"]}>
        {isUserPost ? (
          <UserPostControlButtons matchId={matchId} />
        ) : (
          <MatchApplyButton state={translateMatchAvailable(match)} />
        )}
        <MatchUpContainer match={match} matchId={matchId} />
        <MatchUpTypeContainer match={match} />
        <GetKakaoMap match={match} />
        <MatchRuleContainer />
        <AccountContainer match={match} />
        <UserProfileContainer match={match} />
      </Background>
    </main>
  );
}

export default MatchDetailPage;

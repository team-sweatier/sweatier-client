import api from "@/api";
import { MatchDetail } from "@/types/match.response.type";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import AccountContainer from "./_components/AccountContainer";
import Background from "./_components/Background";
import GetKakaoMap from "./_components/GetKakaoMap";
import MatchControlContainer from "./_components/MatchControlContainer";
import MatchRuleContainer from "./_components/MatchRuleContainer";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import UserProfileContainer from "./_components/UserProfileContainer";
dayjs.locale("ko");

async function MatchDetailPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;

  const match = await api.match.getMatchesByMatchId(matchId);
  if (!match) return null;

  const sportsType = (match as MatchDetail).sportsType.name;
  const sportsRules = (match as MatchDetail).sportsType.rules;

  console.log("match :", match);

  /*
   * todo List
   * '경기 상세 페이지"
   * 2. 신청 가능 상태일 경우 -> 신청 모달 (post 요청) (🔥 participating)
   * 3. match any -> 타입 정의
   */

  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start min-h- relative">
      <Background sportType={sportsType}>
        {/* ✨ 유저가 게시물 작성자일 땐 수정/삭제모드 <-> 아니라면 apply상태 */}
        <MatchControlContainer matchId={matchId} match={match} />
        {/* ✨ 종목, 시간, 날짜, 제목, 내용 & 타 유저의 글이라면 신청하기 버튼 visible */}
        <MatchUpContainer match={match} matchId={matchId} />
        {/* ✨ 모집성별, 매치유형, 모집인원, 모집티어 정보 */}
        <MatchUpTypeContainer match={match} />
        {/* ✨ kakaomap */}
        <GetKakaoMap match={match} />
        {/* ✨ 스포츠 종목별 경기 규칙 */}
        <MatchRuleContainer sportRules={sportsRules} />
        {/* ✨ 게시물 작성자의 입금계좌 정보 */}
        <AccountContainer match={match} />
        {/* ✨ 게시물 작성자의 프로필 정보 */}
        <UserProfileContainer match={match} />
      </Background>
    </main>
  );
}

export default MatchDetailPage;

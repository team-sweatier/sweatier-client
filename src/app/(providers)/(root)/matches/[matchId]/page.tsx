import api from "@/api";
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

  console.log("mactch :", match);

  // console.log("sportType :", match["sportType"])

  // todo 1: 로그인한 유저 정보 가져오기

  // todo 2: 로그인한 유저 id와 hostId 비교 -> 수정/삭제 모드 or 신청 모드 변환 (isUserPost)

  //todo 3: participants에 로그인한 유저 id가 있는지 확인 -> 있다면 account 정보 보여주기

  //todo 4: 정원에 따른 MatchApplyButton에 state 보내주기 (신청, 마감 등)

  //todo 5: 신청 모달

  //* 해당 post가 유저가 작성한 글인지 판별하는 임시 변수
  const isUserPost = true;

  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background sportType={match["sportType"]}>
        {isUserPost ? (
          <UserPostControlButtons matchId={matchId} />
        ) : (
          <MatchApplyButton state="마감 임박" />
        )}
        <MatchUpContainer
          isUserPost={isUserPost}
          sport={match["sportType"]}
          time={dayjs(match["matchDay"]).format("h:mm")}
          date={dayjs(match["matchDay"]).format("M월 D일 dddd")}
          title={match["title"]}
          content={match["content"]}
        />
        <MatchUpTypeContainer
        // matchUpData={{
        //   gender: match["gender"] as string,
        //   matchType: "모집유형",
        //   capability: `${match["applicants"]} / ${match["capability"]}`,
        //   tier: match["tier"],
        // }}
        />
        <GetKakaoMap />
        <MatchRuleContainer />
        <AccountContainer
          isApply={true} //* 현재 로그인한 유저의 해당 post 신청 유무
          accountBank={match["hostBankName"]}
          accountNumber={match["hostAccountNumber"]}
        />
        <UserProfileContainer />
      </Background>
    </main>
  );
}

export default MatchDetailPage;

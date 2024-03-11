import AccountContainer from "./_components/AccountContainer";
import Background from "./_components/Background";
import GetKakaoMap from "./_components/GetKakaoMap";
import MatchApplyButton from "./_components/MatchApplyButton";
import MatchRuleContainer from "./_components/MatchRuleContainer";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import UserPostControlButtons from "./_components/UserPostControlButtons";
import UserProfileContainer from "./_components/UserProfileContainer";

function MatchDetailPage(props: { params: { matchId: string } }) {
  const matchId = props.params.matchId;

  // todo 1. [matchId]에 따른 정보 가져오기 -> reqct-query
  //todo 2.[matchId] 글이 유저의 글인지 다른 사용자의 글인지 확인 -> isUserPost
  //todo 3.[matchId]에 따른 정보 중 sport 정보 Background banner바꾸기
  //todo 4. AccountContainer에 유저 계좌 정보 보내기

  //* 해당 post가 유저가 작성한 글인지 판별하는 임시 변수
  const isUserPost = false;

  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        {isUserPost ? (
          <UserPostControlButtons matchId={matchId} />
        ) : (
          <MatchApplyButton state="마감 임박" />
        )}
        <MatchUpContainer isUserPost={isUserPost} />
        <MatchUpTypeContainer />
        <GetKakaoMap />
        <MatchRuleContainer />
        <AccountContainer
          isApply={true}
          accountBank={"신한은행"}
          accountNumber={"1111-11-11111"}
        />
        <UserProfileContainer />
      </Background>
    </main>
  );
}

export default MatchDetailPage;

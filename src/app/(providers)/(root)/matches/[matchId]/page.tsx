import AccountContainer from "./_components/AccountContainer";
import Background from "./_components/Background";
import GetKakaoMap from "./_components/GetKakaoMap";
import MatchApplyButton from "./_components/MatchApplyButton";
import MatchRuleContainer from "./_components/MatchRuleContainer";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import UserProfileContainer from "./_components/UserProfileContainer";

function MatchDetailPage() {
  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        <MatchApplyButton />
        <MatchUpContainer />
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

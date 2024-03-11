import AccountContainer from "./_components/AccountContainer";
import ApplyStateButton from "./_components/ApplyStateButton";
import Background from "./_components/Background";
import MatchMapContainer from "./_components/MatchMapContainer";
import MatchRuleContainer from "./_components/MatchRuleContainer";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import UserProfileContainer from "./_components/UserProfileContainer";

function MatchDetailPage() {
  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        <ApplyStateButton state="마감 임박" />
        <MatchUpContainer />
        <MatchUpTypeContainer />
        <MatchMapContainer />
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

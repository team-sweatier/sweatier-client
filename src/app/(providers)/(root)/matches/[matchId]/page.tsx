import ApplyStateButton from "./_components/ApplyStateButton";
import Background from "./_components/Background";
import MatchUpContainer from "./_components/MatchUpContainer";
import MatchUpTypeContainer from "./_components/MatchUpTypeContainer";
import OverlayBackground from "./_components/OverlayBackground";

function MatchDetailPage() {
  return (
    <main className="pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        <OverlayBackground>
          <ApplyStateButton />
          <MatchUpContainer />
          <MatchUpTypeContainer />
        </OverlayBackground>
      </Background>
    </main>
  );
}

export default MatchDetailPage;

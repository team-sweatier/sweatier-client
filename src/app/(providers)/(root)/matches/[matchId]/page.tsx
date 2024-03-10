import Background from "./_components/Background";
import MatchUpContainer from "./_components/MatchUpContainer";
import OverlayBackground from "./_components/OverlayBackground";
import ApplyStateButton from "./_components/applyStateButton";

function MatchDetailPage() {
  return (
    <main className="px-5 pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        <OverlayBackground>
          <div>
            <ApplyStateButton />
            <MatchUpContainer />
          </div>
        </OverlayBackground>
      </Background>
    </main>
  );
}

export default MatchDetailPage;

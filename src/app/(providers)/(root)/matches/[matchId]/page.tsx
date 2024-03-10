import Background from "./_components/Background";
import OverlayBackground from "./_components/OverlayBackground";

function MatchDetailPage() {
  return (
    <main className="px-5 pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen relative">
      <Background>
        <OverlayBackground></OverlayBackground>
      </Background>
    </main>
  );
}

export default MatchDetailPage;

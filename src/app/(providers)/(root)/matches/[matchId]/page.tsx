import Page from "@/components/Page";
import { PropsWithChildren } from "react";
import Background from "./_components/Background";
import OverlayBackground from "./_components/OverlayBackground";

function MatchDetailPage({ children }: PropsWithChildren) {
  return (
    <Page>
      <Background>
        <div>MatchDetailPage</div>
        <OverlayBackground>{children}</OverlayBackground>
      </Background>
    </Page>
  );
}

export default MatchDetailPage;

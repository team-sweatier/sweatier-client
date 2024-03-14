"use client";

import { useProfile } from "@/contexts/profile.context";
import translateMatchAvailable from "@/utils/translateMatches/translateMatchAvailable";
import MatchApplyButton from "./MatchApplyButton";
import UserPostControlButtons from "./UserPostControlButtons";

interface MatchControlContainerProps {
  matchId: string;
  match: any;
}

function MatchControlContainer({ matchId, match }: MatchControlContainerProps) {
  const profile = useProfile();
  const isUserPost = profile && match.hostId === profile.id;

  return (
    <>
      {isUserPost ? (
        <UserPostControlButtons matchId={matchId} />
      ) : (
        <MatchApplyButton state={translateMatchAvailable(match)} />
      )}
    </>
  );
}

export default MatchControlContainer;

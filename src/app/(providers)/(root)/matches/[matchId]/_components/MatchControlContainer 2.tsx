"use client";
import { useAuthStore } from "@/store";
import translateMatchAvailable from "@/utils/translateMatches/translateMatchAvailable";
import MatchApplyButton from "./MatchApplyButton";
import UserPostControlButtons from "./UserPostControlButtons";

interface MatchControlContainerProps {
  matchId: string;
  match: any;
}

function MatchControlContainer({ matchId, match }: MatchControlContainerProps) {
  const { userId } = useAuthStore();
  const isUserPost = match.hostId === userId;

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

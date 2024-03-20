"use client";
import { useProfile } from "@/contexts/profile.context";
import MatchApplyStateButton from "./MatchApplyStateButton";
import UserPostControlButtons from "./UserPostControlButtons";

interface MatchControlContainerProps {
  matchId: string;
  match: any;
}

function MatchControlContainer({ matchId, match }: MatchControlContainerProps) {
  const profile = useProfile();
  if (!profile) return null;

  //* 사용자 포스팅인지 확인
  const isUserPost = profile && match.hostId === profile.id;

  return (
    <>
      {isUserPost ? (
        <UserPostControlButtons matchId={matchId} />
      ) : (
        <MatchApplyStateButton match={match} userId={profile.id} />
      )}
    </>
  );
}

export default MatchControlContainer;

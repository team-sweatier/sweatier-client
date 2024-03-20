"use client";

import { useAuth } from "@/contexts/auth.context";
import useMutationApplyMatch from "@/hooks/services/matches/useMutationApplyMatch";
import { useModalStore } from "@/store";
import isUserParticipating from "@/utils/isUserParticipating";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyModal from "./ApplyModal";

interface ApplyButtonProps {
  match: any;
  matchId: string;
  userId: string;
}

function ApplyButton({ match, matchId, userId }: ApplyButtonProps) {
  const { open, close } = useModalStore();
  const { isLoggedIn } = useAuth();
  const { mutate: applyMatch } = useMutationApplyMatch(matchId);

  const isFull = useMemo(
    () => match.applicants / match.capability >= 1,
    [match]
  );

  const hasApplied = useMemo(
    () => (userId ? isUserParticipating(match, userId) : false),
    [match, userId]
  );

  const showToast = useCallback(
    (message: string, type: "error" | "info" | "success") => {
      toast[type](message);
    },
    []
  );

  const handleApplyMatch = useCallback(() => {
    if (!isLoggedIn) {
      showToast("로그인이 필요한 서비스입니다.", "info");
      return;
    }

    applyMatch(matchId, {
      onSuccess: () => showToast("해당 매치에 신청되었습니다!", "success"),
      onError: () => showToast("티어 혹은 성별을 확인해주세요!", "error"),
    });
  }, [isLoggedIn, matchId, showToast, applyMatch]);

  const buttonProps = useMemo(
    () => ({
      className:
        isFull || hasApplied
          ? "text-sm px-8 py-6 rounded-3xl font-bold border-[0.7px] bg-neutral-20 text-neutral-40 border-[#E6E6E6]"
          : "text-sm px-5 py-6 rounded-3xl font-bold border-[0.7px] bg-primary-100 text-white border-primary-100 drop-shadow-[0px_0px_2px_#0f8cff]",
      onClick: () => {
        if (isFull) showToast("신청 마감된 게시물입니다.", "error");
        else if (hasApplied) showToast("이미 신청된 게시물입니다.", "error");
        else
          open(
            <ApplyModal handleApplyMatch={handleApplyMatch} close={close} />
          );
      },
      label: isFull ? "마감" : hasApplied ? "신청완료" : "신청하기",
    }),
    [isFull, hasApplied, showToast, handleApplyMatch, open, close]
  );

  return (
    <button className={buttonProps.className} onClick={buttonProps.onClick}>
      {buttonProps.label}
    </button>
  );
}

export default ApplyButton;

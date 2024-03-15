"use client";

import { useAuth } from "@/contexts/auth.context";
import { useProfile } from "@/contexts/profile.context";
import useMutationApplyMatch from "@/hooks/services/matches/useMutationApplyMatch";
import { useModalStore } from "@/store";
import isUserParticipating from "@/utils/isUserParticipating";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyModal from "./ApplyModal";

interface ApplyButtonProps {
  match: any;
  matchId: string;
}

function ApplyButton({ match, matchId }: ApplyButtonProps) {
  const [applied, setApplied] = useState<boolean>(false);
  const { open, close } = useModalStore();
  const { isLoggedIn } = useAuth();
  const profile = useProfile();

  const { mutate: applyMatch } = useMutationApplyMatch(matchId);

  const isFull = match.applicants / match.capability >= 1; //* 1. 정원 확인하기
  const hasApplied = profile ? isUserParticipating(match, profile.id) : false; //* 2. 기신청 여부 확인하기

  // ! ============================================================ !

  //* 1. 신청하기 시 모달 open handler
  const handleOpenApplyModal = () =>
    open(<ApplyModal handleApplyMatch={handleApplyMatch} close={close} />);

  //* 2. 마감 시 handler
  const handleAlreadyExpired = () => toast.error("신청 마감된 게시물입니다.");

  //* 2. 신청 완료 시 handler
  const handleAlreadyApply = () => toast.error("이미 신청된 게시물입니다.");

  //* 4. 신청 시 handler (props로 전달)
  const handleApplyMatch = () => {
    //* 1. 신청 시 로그인 상태인지 확인
    if (!isLoggedIn) {
      //* userId가 없다면 모달 닫고 & alert 띄우기
      setApplied(true);
      close();
      return toast.info("로그인이 필요한 서비스입니다.");
    }

    //* 2. 로그인 상태라면 신청
    applyMatch(matchId, {
      onSuccess: () => {
        close();
        return toast.success("해당 매치에 신청되었습니다!");
      },
      onError: () => {
        close();
        return toast.error("티어 혹은 성별을 확인해주세요!");
      },
    });
  };

  // ! ============================================================ !

  const buttonProps = (() => {
    if (isFull) {
      return {
        className:
          "text-sm px-8 py-6 rounded-3xl font-bold border-[0.7px] bg-neutral-20 text-neutral-40 border-[#E6E6E6]",
        onClick: handleAlreadyExpired,
        label: "마감",
      };
    } else if (hasApplied || applied) {
      return {
        className:
          "text-sm px-8 py-6 rounded-3xl font-bold border-[0.7px] bg-neutral-20 text-neutral-40 border-[#E6E6E6]",
        onClick: handleAlreadyApply,
        label: "신청완료",
      };
    } else {
      return {
        className:
          "text-sm px-5 py-6 rounded-3xl font-bold border-[0.7px] bg-primary-100 text-white border-primary-100 drop-shadow-[0px_0px_2px_#0f8cff]",
        onClick: handleOpenApplyModal,
        label: "신청하기",
      };
    }
  })();

  return (
    <button className={buttonProps.className} onClick={buttonProps.onClick}>
      {buttonProps.label}
    </button>
  );
}

export default ApplyButton;

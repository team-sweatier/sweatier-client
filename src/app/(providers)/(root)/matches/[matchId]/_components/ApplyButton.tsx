"use client";
import useMutationApplyMatch from "@/hooks/services/matches/useMutationApplyMatch";
import { useAuthStore, useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyModal from "./ApplyModal";

interface ApplyButtonProps {
  isAbledApply: boolean;
  matchId: string;
}

function ApplyButton({ matchId }: ApplyButtonProps) {
  const { open, close } = useModalStore();
  const { userId } = useAuthStore();
  const router = useRouter();
  const [isApply, setIsApply] = useState<boolean>(false);
  const { mutate: applyMatch } = useMutationApplyMatch(matchId);

  if (!applyMatch) return null;

  //todo :usemutaion을 써서 success 가 되면 useState 상태를 바꿔준다.

  const handleApplyMatch = () => {
    //* 1. 신청 시 로그인 상태인지 확인
    if (!userId) {
      //* userId가 없다면 모달 닫고 & alert 띄우고 & 메인페이지로 이동
      close();
      router.replace("/"); //메인 페이지로 이동
      return toast.info("로그인이 필요한 서비스입니다.");
    }

    //* 2. 로그인 상태라면 신청
    applyMatch(matchId, {
      onSuccess: () => {
        setIsApply(true); //* 1. 신청 상태로 바꿔준다.
        close();
        return toast.success("해당 매치에 신청되었습니다!");
      },
      onError: () => {
        close();
        return toast.error("신청에 실패하였습니다");
      },
    });
  };

  return (
    <button
      type="button"
      className={`text-sm px-5 py-6 rounded-3xl font-bold border-[0.7px] ${
        !isApply
          ? "bg-primary-100 text-white border-primary-100 drop-shadow-[0px_0px_2px_#0f8cff]"
          : "bg-neutral-20 text-neutral-40 border-[#E6E6E6]"
      }`}
      onClick={() => open(<ApplyModal handleApplyMatch={handleApplyMatch} />)}
    >
      신청하기
    </button>
  );
}

export default ApplyButton;

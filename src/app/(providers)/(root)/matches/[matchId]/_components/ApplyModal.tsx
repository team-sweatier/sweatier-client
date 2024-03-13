import Modal from "@/components/Modal";
import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ApplyModalProps {
  matchId: string;
}

function ApplyModal({ matchId }: ApplyModalProps) {
  const router = useRouter();
  const { close } = useModalStore();

  //* 로그인 여부 임시 변수
  const isLoggedIn = false;

  const handleApply = () => {
    //* 로그인 정보 확인 (유저 id가 없다면 -> alert 띄운 후, 메인페이지로 이동)
    if (!isLoggedIn) {
      close();
      router.replace("/"); //메인 페이지로 이동
      return toast.info("로그인이 필요한 서비스입니다.");
    }
    //* 해당 경기에 신청하는 post api 호출 -> 신청 완료되면 alert 띄운 후, "신청 완료"로 상태 변경

    //* 신청 api
    //* 신청 success 시 => toast.success("신청되었습니다!");
    //* 신청 error 시 => toast.error("신청에 실패하였습니다");
    //* 모달 닫기
    //* 신청여부 변경
  };

  return (
    <Modal>
      <ul className="max-w-lg w-full mx-auto flex flex-col items-center justify-center px-4">
        <div className="mx-auto text-center gap-y-4 grid">
          <div className="text-xl font-bold fext-[#0B1E2F]">신청하기</div>
          <p className="mt-3 mb-8 text-sm fext-[#0B1E2F]">
            해당 경기에 참가 신청하시겠습니까?
          </p>
        </div>

        <div className="flex w-full gap-x-4">
          <button
            onClick={close}
            className="w-full py-2 text-sm font-bold rounded-[10px] bg-neutral-20 text-neutral-40 "
          >
            취소
          </button>
          <button
            onClick={handleApply}
            className="w-full py-2 text-sm font-bold rounded-[10px] bg-primary-100 text-white "
          >
            확인
          </button>
        </div>
      </ul>
    </Modal>
  );
}

export default ApplyModal;

import Modal from "@/components/Modal";
import "react-toastify/dist/ReactToastify.css";

interface ApplyModalProps {
  handleApplyMatch: () => void;
  close: () => void;
}

function ApplyModal({ handleApplyMatch, close }: ApplyModalProps) {
  return (
    <Modal>
      <ul className="max-w-lg w-full mx-auto flex flex-col items-center justify-center px-4">
        <div className="mx-auto text-center gap-y-4 grid">
          <div className="text-xl font-bold fext-[#0B1E2F]">신청하기</div>
          <p className="mt-3 mb-8 text-sm fext-[#0B1E2F]">
            해당 경기에 참가 신청하시겠습니까?
          </p>
        </div>

        <div className="flex w-full gap-x-5">
          <button
            onClick={close}
            className="w-full py-3 text-sm font-bold rounded-[10px] bg-neutral-20 text-neutral-40 "
          >
            취소
          </button>
          <button
            onClick={handleApplyMatch}
            className="w-full py-3 text-sm font-bold rounded-[10px] bg-primary-100 text-white "
          >
            확인
          </button>
        </div>
      </ul>
    </Modal>
  );
}

export default ApplyModal;

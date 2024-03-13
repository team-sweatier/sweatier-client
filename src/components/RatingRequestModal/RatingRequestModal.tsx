import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store";

function RatingRequestModal() {
  const { close } = useModalStore();
  return (
    <Modal>
      <ul className="w-full mx-auto flex flex-col items-center">
        <Heading>티어평가 미실시</Heading>
        <div className="mx-auto text-center my-6 text-sm">
          <p>함께 운동했던 유저들은 어땠나요?</p>
          <p>지난 경기의 티어평가를 실시해보세요.</p>
        </div>

        <button
          onClick={() => close()}
          className="w-full py-2 text-sm font-bold rounded-[10px] bg-primary-100 text-white "
        >
          확인
        </button>
      </ul>
    </Modal>
  );
}

export default RatingRequestModal;

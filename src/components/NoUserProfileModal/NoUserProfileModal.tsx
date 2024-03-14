import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

function NoUserProfileModal() {
  const { close } = useModalStore();
  const router = useRouter();

  const handleClickButton = () => {
    close();
    router.push("/accounts/user-registration");
  };

  return (
    <Modal>
      <div className="grid gap-y-6 text-neutral-90">
        <h5 className="font-bold text-center">유저정보 미등록</h5>

        <p className="text-center text-xs">
          유저정보를 등록해주세요!
          <br />
          등록 후 서비스 이용이 가능합니다.
        </p>

        <button
          onClick={handleClickButton}
          className="bg-primary-100 text-white font-medium rounded-lg text-sm sm:px-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-neutral-20 disabled:text-neutral-40 sm:py-3 py-2"
        >
          유저정보 등록하기
        </button>
      </div>
    </Modal>
  );
}

export default NoUserProfileModal;

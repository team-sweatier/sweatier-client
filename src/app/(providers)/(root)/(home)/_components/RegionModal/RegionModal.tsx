import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store";
import matchTypes from "@/utils/matchTypes";
import TypesList from "../TypesList";

function RegionModal() {
  const { close } = useModalStore();
  return (
    <Modal>
      <ul className="w-full mx-auto flex flex-col items-center">
        <Heading>지역 선택</Heading>
        <TypesList
          typeName="region"
          typesList={matchTypes.regions}
          className="grid grid-cols-5 gap-2 mt-9"
        />
        <button
          onClick={() => close()}
          className="w-full py-2 text-sm font-bold rounded-[10px] bg-primary-100 text-white mt-11"
        >
          확인
        </button>
      </ul>
    </Modal>
  );
}

export default RegionModal;

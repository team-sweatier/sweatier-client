import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store";
import matchTypes from "@/utils/matchTypes";
import { Dispatch, SetStateAction } from "react";
import TypesList from "../TypesList";

function RegionModal({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}) {
  const { close } = useModalStore();

  return (
    <Modal>
      <ul className="w-full mx-auto px-5 py-8 flex flex-col items-center">
        <Heading>지역 선택</Heading>
        <TypesList
          typesList={matchTypes.regions}
          selectedTypes={selectedRegion}
          setSelectedTypes={setSelectedRegion}
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

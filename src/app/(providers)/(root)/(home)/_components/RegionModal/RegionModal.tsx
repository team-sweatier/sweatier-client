import BlueButton from "@/components/Buttons/BlueButton";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store";
import useFilterStore from "@/store/filter.store";
import matchTypes from "@/utils/matchTypes";
import { useState } from "react";
import TypesList from "../TypesList";

function RegionModal() {
  const { close } = useModalStore();
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const { setRegion } = useFilterStore();

  return (
    <Modal>
      <ul className="w-full mx-auto flex flex-col items-center">
        <Heading>지역 선택</Heading>
        <TypesList
          typeName="region"
          typesList={matchTypes.regions}
          className="grid grid-cols-5 gap-2 mt-9"
          selectedState={selectedRegion}
          setSelectedState={setSelectedRegion}
        />
        <BlueButton
          buttonLabel="확인"
          onclick={() => {
            setRegion(selectedRegion);
            close();
          }}
          isValid
        />
      </ul>
    </Modal>
  );
}

export default RegionModal;

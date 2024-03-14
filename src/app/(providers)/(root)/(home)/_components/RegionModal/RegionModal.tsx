"use client";

import BlueButton from "@/components/Buttons/BlueButton";
import RoundButton from "@/components/Buttons/RoundButton";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store";
import matchTypes from "@/utils/matchTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface RegionModalProps {
  initialSelectedRegion: string | undefined;
}

function RegionModal({ initialSelectedRegion }: RegionModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { close } = useModalStore();
  const [selectedRegion, setSelectedRegion] = useState(initialSelectedRegion);

  const handleClickConfirm = () => {
    const queryString = new URLSearchParams(searchParams.toString());
    if (selectedRegion) {
      queryString.set("region", selectedRegion);
    } else {
      queryString.delete("region");
    }
    router.push(`/?${queryString}`);

    close();
  };

  return (
    <Modal>
      <div className="w-full mx-auto flex flex-col items-center">
        <Heading className="text-base text-center">지역 선택</Heading>

        <ul className={`items-center sm:gap-2 grid grid-cols-5 gap-2 mt-9`}>
          <li key="전체">
            <RoundButton
              label="전체"
              isSelected={selectedRegion === undefined}
              onClick={() => setSelectedRegion(undefined)}
              className="px-3.5"
            />
          </li>

          {matchTypes.regions.map((region) => (
            <li key={region}>
              <RoundButton
                label={region}
                isSelected={selectedRegion === region}
                onClick={() => setSelectedRegion(region)}
                className="px-3.5"
              />
            </li>
          ))}
        </ul>

        <div className=" w-full mt-11">
          <BlueButton buttonLabel="확인" onClick={handleClickConfirm} isValid />
        </div>
      </div>
    </Modal>
  );
}

export default RegionModal;

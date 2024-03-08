"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import RegionModal from "../RegionModal";

function Region({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClickButton = () => {
    setIsClicked((current) => !current);
  };
  return (
    <div className="w-[100%] my-4">
      <div className="flex gap-1">
        <span className="text-[14px] font-bold text-neutral-60">{`${
          selectedRegion ? selectedRegion : "지역"
        }`}</span>
        <Image
          onClick={handleClickButton}
          src="/assets/tune.svg"
          width={20}
          height={20}
          alt="alarm-image"
          className="object-cover"
        />
      </div>

      {isClicked ? (
        <RegionModal
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      ) : null}
    </div>
  );
}

export default Region;

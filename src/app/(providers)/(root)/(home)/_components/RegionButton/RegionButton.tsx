"use client";
import { useModalStore } from "@/store";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import RegionModal from "../RegionModal";

function RegionButton({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}) {
  const { open } = useModalStore();
  return (
    <div className="w-full my-4">
      <div className="flex gap-1">
        <span className="text-sm font-bold text-neutral-60">{`${
          selectedRegion ? selectedRegion : "지역"
        }`}</span>
        <Image
          onClick={() =>
            open(
              <RegionModal
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
            )
          }
          src="/assets/tune.svg"
          width={20}
          height={20}
          alt="alarm-image"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default RegionButton;

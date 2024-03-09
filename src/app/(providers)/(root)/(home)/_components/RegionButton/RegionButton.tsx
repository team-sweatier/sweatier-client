"use client";
import { useModalStore } from "@/store";
import useFilterStore from "@/store/filter.store";
import Image from "next/image";
import RegionModal from "../RegionModal";

function RegionButton() {
  const { open } = useModalStore();
  const region = useFilterStore((state) => state.region);
  console.log(region);

  return (
    <div className="w-full my-4 px-2">
      <div className="flex gap-1">
        <span className="text-sm font-bold text-neutral-60">{`${
          region ? region : "지역"
        }`}</span>
        <Image
          onClick={() => open(<RegionModal />)}
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

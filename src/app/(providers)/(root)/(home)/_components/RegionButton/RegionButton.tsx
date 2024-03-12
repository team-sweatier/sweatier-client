"use client";
import filter from "@/../public/assets/main_page/filter.svg";
import { useModalStore } from "@/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import RegionModal from "../RegionModal";

function RegionButton() {
  const { open } = useModalStore();
  const searchParams = useSearchParams();
  const selectedRegion = searchParams.get("region") || undefined;

  return (
    <div
      className="w-full my-4 px-2 hover:cursor-pointer"
      onClick={() =>
        open(<RegionModal initialSelectedRegion={selectedRegion} />)
      }
    >
      <div className="flex gap-1">
        <span className="text-sm font-bold text-neutral-60">{`${
          selectedRegion || "지역"
        }`}</span>
        <Image
          src={filter}
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

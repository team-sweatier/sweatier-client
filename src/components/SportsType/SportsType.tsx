"use client";

import { Dispatch, SetStateAction } from "react";

function SportsType({
  type,
  selectedSports,
  setSelectedSports,
}: {
  type: string;
  selectedSports: string;
  setSelectedSports: Dispatch<SetStateAction<string>>;
}) {
  const handleClickSports = () => {
    setSelectedSports(type);
  };

  const isSelected = selectedSports === type;

  return (
    <button
      onClick={handleClickSports}
      className={`rounded-[30px] border px-3 py-2
    
      ${isSelected ? "bg-primary-100 text-white" : " text-neutral-50"}`}
    >
      {type}
    </button>
  );
}

export default SportsType;

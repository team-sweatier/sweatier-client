import SportsType from "@/components/SportsType";
import { Dispatch, SetStateAction } from "react";

function SportsTypesList({
  selectedSports,
  setSelectedSports,
}: {
  selectedSports: string;
  setSelectedSports: Dispatch<SetStateAction<string>>;
}) {
  const sportsList = ["농구", "배드민턴", "야구", "축구", "테니스"];

  return (
    <ul className="flex items-center mt-2 gap-1 ">
      {sportsList.map((sports) => (
        <li key={sports}>
          <SportsType
            type={sports}
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
        </li>
      ))}
    </ul>
  );
}

export default SportsTypesList;

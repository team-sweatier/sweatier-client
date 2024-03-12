"use client";

import RoundButton from "@/components/Buttons/RoundButton";
import { newSports } from "@/utils/matchTypes";
import { useSearchParams } from "next/navigation";

function SportTypeFilter() {
  const searchParams = useSearchParams();
  const selectedSportTypeValue = searchParams.get("sportType") || "basketball";

  return (
    <ul className={`flex items-center my-4 gap-1 sm:gap-2 px-1 h-[34px]`}>
      {newSports.map((sport) => {
        const queryString = new URLSearchParams(searchParams.toString());
        queryString.set("sportType", sport.value);

        return (
          <li key={sport.value}>
            <RoundButton
              label={sport.label}
              isSelected={sport.value === selectedSportTypeValue}
              isLink
              href={{ query: queryString.toString() }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default SportTypeFilter;

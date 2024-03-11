"use client";
import RoundButton from "@/components/Buttons/RoundButton";
import useFilterStore from "@/store/filter.store";
import { Dispatch, SetStateAction } from "react";

function TypesList({
  typeName,
  typesList,
  className,
  selectedState,
  setSelectedState,
}: {
  typeName: string;
  typesList: string[];
  className?: string;
  selectedState?: string;
  setSelectedState?: Dispatch<SetStateAction<string>>;
}) {
  const filterStore = useFilterStore();

  const isSelected = (type: string) => {
    if (typeName === "sports") {
      return type === filterStore.sports;
    }
    return type === selectedState;
  };

  const handleClickButton = (type: string) => {
    if (typeName === "sports") {
      filterStore.setSports(type);
    } else {
      setSelectedState?.(type);
    }
  };
  return (
    <ul className={`flex items-center mt-2 gap-1 sm:gap-2 ${className}`}>
      {typesList.map((type) => (
        <li key={type}>
          <RoundButton
            label={type}
            isSelected={isSelected(type)}
            onClick={() => {
              handleClickButton(type);
            }}
            key={type}
            className="px-3.5"
          />
        </li>
      ))}
    </ul>
  );
}

export default TypesList;

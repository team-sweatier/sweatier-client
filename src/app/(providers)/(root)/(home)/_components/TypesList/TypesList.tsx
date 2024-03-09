import Button from "@/components/Forms/Button";
import { Dispatch, SetStateAction } from "react";

function TypesList({
  typesList,
  selectedTypes,
  setSelectedTypes,
  className,
}: {
  typesList: string[];
  selectedTypes: string;
  setSelectedTypes: Dispatch<SetStateAction<string>>;
  className?: string;
}) {
  return (
    <ul className={`flex items-center mt-2 gap-1 ${className}`}>
      {typesList.map((type) => (
        <li key={type}>
          <Button
            label={type}
            isSelected={type === selectedTypes}
            onClick={() => setSelectedTypes(type)}
            key={type}
          />
        </li>
      ))}
    </ul>
  );
}

export default TypesList;

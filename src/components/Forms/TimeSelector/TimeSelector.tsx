import DropDownBox from "@/components/Forms/DropDownBox"; // Assume existing component
import { useFormContext } from "react-hook-form";

interface TimeSelectorProps {
  hourName: string;
  minuteName: string;
  hourDefaultValue?: string;
  minuteDefaultValue?: string;
}

function TimeSelector({
  hourName,
  minuteName,
  hourDefaultValue,
  minuteDefaultValue,
}: TimeSelectorProps) {
  const { register } = useFormContext();

  return (
    <>
      <DropDownBox
        options={Array.from({ length: 24 }, (_, i) => `${i}`.padStart(2, "0"))}
        {...register(hourName)}
        defaultValue={hourDefaultValue || "00"}
      />
      <DropDownBox
        options={Array.from({ length: 60 }, (_, i) => `${i}`.padStart(2, "0"))}
        {...register(minuteName)}
        defaultValue={minuteDefaultValue || "00"}
      />
    </>
  );
}

export default TimeSelector;

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useFormContext } from "react-hook-form";

interface DateSelectorProps {
  name: string;
  defaultValue?: Date;
}

function DateSelector({ name, defaultValue }: DateSelectorProps) {
  const { setValue } = useFormContext();

  return (
    <DayPicker
      mode="single"
      selected={defaultValue}
      onSelect={(date) => setValue(name, date)}
    />
  );
}

export default DateSelector;

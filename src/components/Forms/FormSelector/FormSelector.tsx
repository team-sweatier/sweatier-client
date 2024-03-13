import RoundButton from "@/components/Buttons/RoundButton";
import { Controller, useFormContext } from "react-hook-form";

interface FormSelectorProps {
  name: string;
  options: { label: string; value: string | number }[];
  defaultValue?: any;
}

function FormSelector({ name, options, defaultValue }: FormSelectorProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value } }) => (
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <RoundButton
              key={option.value}
              label={option.label}
              isSelected={value === option.value}
              onClick={() => onChange(option.value)}
            />
          ))}
        </div>
      )}
    />
  );
}

export default FormSelector;

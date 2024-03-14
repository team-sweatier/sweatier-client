import RoundButton from "@/components/Buttons/RoundButton";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectorProps {
  name: string;
  label: string;
  iconSrc: string;
  options: Option[];
  defaultValue?: string | number;
}

function FormSelector({
  name,
  label,
  iconSrc,
  options,
  defaultValue = "",
}: FormSelectorProps) {
  const { control } = useFormContext();

  const selectedValue = useWatch({
    control,
    name,
  });

  return (
    <FormOuter>
      <label
        className="font-bold pb-4 flex items-center gap-x-1"
        htmlFor={name}
      >
        <Icon src={iconSrc} alt={`${name}-icon`} classStyles="mb-[2px]" />
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <RoundButton
                key={option.value}
                label={option.label}
                isSelected={selectedValue === option.value}
                onClick={() => onChange(option.value)}
              />
            ))}
          </div>
        )}
      />
    </FormOuter>
  );
}

export default FormSelector;

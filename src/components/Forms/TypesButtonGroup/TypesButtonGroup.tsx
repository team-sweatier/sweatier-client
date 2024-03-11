import { MatchTypesObject } from "@/utils/matchTypes";
import { StaticImageData } from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import RoundButton from "../../Buttons/RoundButton";
import FormOuter from "../FormOuter";
import Label from "../Label";

interface TypesButtonGroupProps {
  label: string;
  id: string;
  typeString: MatchTypesObject[];
  iconSrc: StaticImageData;
  selectedValue?: string | number;
}

function TypesButtonGroup({
  id,
  label,
  typeString,
  iconSrc,
  selectedValue,
}: TypesButtonGroupProps) {
  const { control, watch } = useFormContext();

  console.log("selectedValue", selectedValue);

  return (
    <FormOuter>
      <Label id={id} label={label} iconSrc={iconSrc} />
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {typeString.map((type, i) => (
          <Controller
            key={`${type}-${i}`}
            name={id}
            control={control}
            rules={{ required: "이 필드는 필수입니다." }}
            render={({ field }) => (
              <RoundButton
                key={i}
                label={Object.keys(type)[0]}
                onClick={() => field.onChange(Object.values(type)[0])}
                isSelected={
                  selectedValue
                    ? selectedValue === Object.values(type)[0]
                    : watch(id) === Object.values(type)[0]
                }
              />
            )}
          />
        ))}
      </div>
    </FormOuter>
  );
}

export default TypesButtonGroup;

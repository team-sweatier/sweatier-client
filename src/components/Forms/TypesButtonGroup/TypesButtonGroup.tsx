import { MatchTypesObject } from "@/utils/matchTypes";
import { Controller, useFormContext } from "react-hook-form";
import postIcon from "../../../../public/assets/postIcon.svg";
import Button from "../../Button";
import FormOuter from "../FormOuter";
import Label from "../Label";

interface TypesButtonGroupProps {
  label: string;
  id: string;
  typeString: MatchTypesObject[];
}

function TypesButtonGroup({ id, label, typeString }: TypesButtonGroupProps) {
  const { control, watch } = useFormContext();

  return (
    <FormOuter>
      <Label id={id} label={label} iconSrc={postIcon} />
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {typeString.map((type, i) => (
          <Controller
            key={`${type}-${i}`}
            name={id}
            control={control}
            rules={{ required: "이 필드는 필수입니다." }}
            render={({ field }) => (
              <Button
                key={i}
                label={Object.keys(type)[0]}
                onClick={() => field.onChange(Object.values(type)[0])}
                isSelected={watch(id) === Object.values(type)[0]}
              />
            )}
          />
        ))}
      </div>
    </FormOuter>
  );
}

export default TypesButtonGroup;

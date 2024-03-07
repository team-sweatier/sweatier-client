import { MatchTypesObject } from "@/utils/matchTypes";
import {
  Control,
  Controller,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import Button from "../Button";
import FormOuter from "../FormOuter";
import Label from "../Forms/Label";

interface TypesButtonGroupProps {
  control: Control<FieldValues, any>;
  watch: UseFormWatch<FieldValues>;
  label: string;
  id: string;
  typeString: MatchTypesObject[];
}

function TypesButtonGroup({
  control,
  watch,
  id,
  label,
  typeString,
}: TypesButtonGroupProps) {
  return (
    <FormOuter>
      <Label id={id} label={label} />
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {typeString.map((type, i) => (
          <Controller
            key={`${type}-${i}`}
            name={id}
            control={control}
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

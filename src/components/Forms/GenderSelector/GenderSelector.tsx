import RoundButton from "@/components/Buttons/RoundButton";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import { Controller, useFormContext, useWatch } from "react-hook-form";

function GenderSelector() {
  const { control } = useFormContext();

  const selectedGender = useWatch({
    control,
    name: "gender",
  });

  return (
    <FormOuter>
      <label
        className="font-bold pb-4 flex items-center gap-x-1"
        htmlFor="gender"
      >
        <Icon
          src={matchCreateIcons.gender}
          alt="postIcon-icon"
          classStyles="mb-[2px]"
        />
        모집성별
      </label>
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {matchTypes.gender.map((genderType, i) => (
          <Controller
            key={i}
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RoundButton
                label={Object.keys(genderType)[0]}
                onClick={() => onChange(Object.values(genderType)[0])}
                isSelected={selectedGender === Object.values(genderType)[0]}
              />
            )}
          />
        ))}
      </div>
    </FormOuter>
  );
}

export default GenderSelector;

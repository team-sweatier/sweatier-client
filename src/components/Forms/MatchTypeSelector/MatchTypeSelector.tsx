import RoundButton from "@/components/Buttons/RoundButton";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import { Controller, useFormContext, useWatch } from "react-hook-form";

function MatchTypeSelector() {
  const { control } = useFormContext();

  const selectedCapability = useWatch({
    control,
    name: "capability",
  });

  return (
    <FormOuter>
      <label
        className="font-bold flex items-center gap-x-1 pb-4 "
        htmlFor="capability"
      >
        <Icon
          src={matchCreateIcons.gender}
          alt="postIcon-icon"
          classStyles="mb-[2px]"
        />
        매치유형
      </label>
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {matchTypes.players.map((playerType, i) => (
          <Controller
            key={i}
            name="capability"
            control={control}
            render={({ field: { onChange } }) => (
              <RoundButton
                label={Object.keys(playerType)[0]}
                onClick={() => onChange(Object.values(playerType)[0])}
                isSelected={selectedCapability === Object.values(playerType)[0]}
              />
            )}
          />
        ))}
      </div>
    </FormOuter>
  );
}

export default MatchTypeSelector;

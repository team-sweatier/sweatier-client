import RoundButton from "@/components/Buttons/RoundButton";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import { Controller, useFormContext, useWatch } from "react-hook-form";

function SportTypeSelector() {
  const { control } = useFormContext();

  const selectedSport = useWatch({
    control,
    name: "sportsTypeName",
  });

  return (
    <FormOuter>
      <label
        className="font-bold pb-2 flex items-center gap-x-1 py-1"
        htmlFor="sportsTypeName"
      >
        <Icon
          src={matchCreateIcons.sport}
          alt="postIcon-icon"
          classStyles="mb-[2px]"
        />
        종목
      </label>
      <div className="flex flex-wrap gap-2 gap-y-2.5">
        {matchTypes.sports.map((sport, i) => (
          <Controller
            key={i}
            name="sportsTypeName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RoundButton
                label={Object.keys(sport)[0]}
                onClick={() => onChange(Object.values(sport)[0])}
                isSelected={selectedSport === Object.values(sport)[0]}
              />
            )}
          />
        ))}
      </div>
    </FormOuter>
  );
}

export default SportTypeSelector;

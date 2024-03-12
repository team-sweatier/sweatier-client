import DropDownBox from "@/components/Forms/DropDownBox";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import { Controller, useFormContext } from "react-hook-form";

function MatchTime() {
  const { control } = useFormContext();
  return (
    <FormOuter>
      <label
        className="font-bold pb-2 flex items-center gap-x-1 py-1"
        htmlFor="capability"
      >
        <Icon
          src={matchCreateIcons.time}
          alt="경기 시작 시간"
          classStyles="mb-[2px]"
        />
        경기 시작 시간
      </label>

      <div className="flex items-center gap-x-6 pt-1">
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="hour"
            render={({ field: { onChange, value } }) => (
              <DropDownBox
                options={matchTypes.timeHours}
                value={value}
                onChange={(value) => onChange(value)}
              />
            )}
            defaultValue="00"
          />
          <span>시</span>
        </div>

        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="minute"
            render={({ field: { onChange, value } }) => (
              <DropDownBox
                options={matchTypes.timeMinutes}
                value={value}
                onChange={(value) => onChange(value)}
              />
            )}
            defaultValue="00"
          />
          <span>분</span>
        </div>
      </div>
    </FormOuter>
  );
}

export default MatchTime;

import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import { Controller, useFormContext } from "react-hook-form";
import DropDownBox from "../DropDownBox";
import FormOuter from "../FormOuter";
import Label from "../Label";

function DropDownGroup() {
  const { control } = useFormContext();

  return (
    <FormOuter>
      <div className="flex gap-x-8 items-center">
        <div className="flex items-center gap-x-2">
          <Label id="hour" label="시간" iconSrc={matchCreateIcons.time} />
          <Controller
            control={control}
            name="hour"
            render={({ field }) => (
              <DropDownBox
                options={matchTypes.timeHours}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <span>시</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Label id="minute" label="분" iconSrc={matchCreateIcons.time} />
          <Controller
            control={control}
            name="minute"
            render={({ field }) => (
              <DropDownBox
                options={matchTypes.timeMinutes}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <span>분</span>
        </div>
      </div>
    </FormOuter>
  );
}

export default DropDownGroup;

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
      <div className="flex flex-col justify-start ">
        <Label
          id="hour"
          label="경기 시작 시간"
          iconSrc={matchCreateIcons.time}
        />

        <div className="flex items-center gap-x-6 pt-1">
          <div className="flex items-center gap-x-2">
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
      </div>
    </FormOuter>
  );
}

export default DropDownGroup;

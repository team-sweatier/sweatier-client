import matchCreateIcons from "@/utils/matchCreateIcons";
import matchTypes from "@/utils/matchTypes";
import DropDownBox from "../DropDownBox";
import FormOuter from "../FormOuter";
import Label from "../Label";

interface DropDownGroupProps {
  label: string;
  id: string;
}

function DropDownGroup({ label, id }: DropDownGroupProps) {
  return (
    <FormOuter>
      <Label id={id} label={label} iconSrc={matchCreateIcons.time} />
      <div className="flex gap-x-8 items-center">
        <div className="flex items-center gap-x-2">
          <DropDownBox options={matchTypes.timeHours} registerId={"hour"} />
          <span>시</span>
        </div>
        <div className="flex items-center gap-x-2">
          <DropDownBox options={matchTypes.timeMinutes} registerId={"minute"} />
          <span>분</span>
        </div>
      </div>
    </FormOuter>
  );
}

export default DropDownGroup;

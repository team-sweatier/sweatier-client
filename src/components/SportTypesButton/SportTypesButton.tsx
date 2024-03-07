import Button from "../Button";
import FormOuter from "../FormOuter";
import Label from "../Forms/Label";

interface SportTypesButtonProps {
  label: string;
  id: string;
}

function SportTypesButton({ id, label }: SportTypesButtonProps) {
  return (
    <FormOuter>
      <Label id={id} label={label} />
      <div className="flex flex-wrap gap-2">
        <Button label={"농구"} />
        <Button label={"배드민턴"} />
        <Button label={"야구"} />
        <Button label={"축구"} />
        <Button label={"테니스"} />
      </div>
    </FormOuter>
  );
}

export default SportTypesButton;

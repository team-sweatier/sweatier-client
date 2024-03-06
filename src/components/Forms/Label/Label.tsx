import { PropsWithChildren } from "react";

type LabelProps = PropsWithChildren<{
  label: string;
  id: string;
}>;

function Label({ id, label }: LabelProps) {
  return (
    <label className="font-bold pb-2" htmlFor={id}>
      {label}
    </label>
  );
}

export default Label;

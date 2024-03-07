import Icon from "@/components/Icon";
import { PropsWithChildren } from "react";
import postIcon from "../../../../public/assets/postIcon.svg";

type LabelProps = PropsWithChildren<{
  label: string;
  id: string;
}>;

function Label({ id, label }: LabelProps) {
  return (
    <div className="flex gap-x-1 py-1">
      <Icon src={postIcon} alt="postIcon-icon" />
      <label className="font-bold pb-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Label;

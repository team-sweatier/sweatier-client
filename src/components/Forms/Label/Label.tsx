import Icon from "@/components/Icon";
import { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type LabelProps = PropsWithChildren<{
  label: string;
  id: string;
  iconSrc: StaticImageData;
}>;

function Label({ id, label, iconSrc }: LabelProps) {
  return (
    <div className="flex gap-x-1 py-1">
      <Icon src={iconSrc} alt="postIcon-icon" />
      <label className="font-bold pb-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Label;

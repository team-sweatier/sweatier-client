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
    <label
      className="font-bold pb-2 flex items-center gap-x-1 py-1"
      htmlFor={id}
    >
      <Icon src={iconSrc} alt="postIcon-icon" classStyles="mb-[2px]" />
      {label}
    </label>
  );
}

export default Label;

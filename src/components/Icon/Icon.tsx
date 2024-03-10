import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type IconProps = PropsWithChildren<{
  src: StaticImageData;
  alt: string;
  classStyles?: string;
}>;

function Icon({ src, alt, classStyles, ...props }: IconProps) {
  return (
    <span className="items-stretch">
      <Image src={src} alt={alt} {...props} className={classStyles} />
    </span>
  );
}

export default Icon;

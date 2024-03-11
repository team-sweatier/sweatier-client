import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import { PropsWithChildren } from "react";

type IconProps = PropsWithChildren<{
  src: string | StaticImageData;
  alt: string;
  classStyles?: string;
}>;

function Icon({ src, alt, classStyles }: IconProps) {
  return (
    <span className="items-stretch">
      <Image
        objectFit="contain" // 종횡비 유지
        src={src}
        alt={alt}
        className={classStyles}
      />
    </span>
  );
}

export default Icon;

// Icon 컴포넌트 수정
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import { PropsWithChildren } from "react";

type IconProps = PropsWithChildren<{
  src: string | StaticImageData;
  alt: string;
  classStyles?: string;
  width?: number;
  height?: number;
}>;

function Icon({ src, alt, classStyles, width, height }: IconProps) {
  return (
    <div className={`flex items-center ${classStyles}`}>
      <Image
        src={src}
        alt={alt}
        objectFit="contain" // 종횡비 유지
        width={width}
        height={height}
      />
    </div>
  );
}

export default Icon;

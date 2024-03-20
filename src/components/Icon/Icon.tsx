// Icon 컴포넌트 수정
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";

type IconProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  classStyles?: string;
};

function Icon({ src, alt, classStyles, width = 20, height = 20 }: IconProps) {
  return (
    <div className={`flex items-center ${classStyles}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="contain"
        priority
      />
    </div>
  );
}

export default Icon;

import Image from "next/legacy/image";

function Banner() {
  return (
    <div className="relative w-full mb-5 ">
      <Image
        src="/assets/carousel-image-1.svg"
        sizes="100vw"
        priority
        width={350}
        height={114}
        alt="carousel-image"
      />
    </div>
  );
}

export default Banner;

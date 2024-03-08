import Image from "next/image";

function Banner() {
  return (
    <div className="flex justify-center relative w-full mb-5">
      <Image
        src="/assets/carousel-image-1.svg"
        layout="responsive"
        width={350}
        height={114}
        alt="carousel-image"
      />
    </div>
  );
}

export default Banner;

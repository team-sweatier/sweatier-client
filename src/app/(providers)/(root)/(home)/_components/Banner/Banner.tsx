"use client";
import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
function Banner() {
  return (
    <div className="w-full mb-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation

        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src="/assets/carousel-image-1.svg"
            layout="responsive"
            width={350}
            height={114}
            alt="carousel-image"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/carousel-image-1.svg"
            layout="responsive"
            width={350}
            height={114}
            alt="carousel-image"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/assets/carousel-image-1.svg"
            layout="responsive"
            width={350}
            height={114}
            alt="carousel-image"
            loading="lazy"
          />
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
}

export default Banner;

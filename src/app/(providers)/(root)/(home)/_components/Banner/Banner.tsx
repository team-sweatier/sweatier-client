"use client";
import Banner1 from "@/../public/assets/main_page/banner1.png";
import Banner2 from "@/../public/assets/main_page/banner2.png";
import Banner3 from "@/../public/assets/main_page/banner3.png";

import Image from "next/image";
import { A11y, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
function Banner() {
  return (
    <div className="w-full max-h-[237px] mb-5">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src={Banner1}
            alt="banner-image-1"
            priority
            className="flex items-center justify-center"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image src={Banner2} alt="banner-image-2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner3} alt="banner-image-3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;

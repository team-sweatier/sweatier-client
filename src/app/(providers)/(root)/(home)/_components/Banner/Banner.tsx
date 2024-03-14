"use client";
import Banner1 from "@/../public/assets/main_page/banner1.svg";
import Banner2 from "@/../public/assets/main_page/banner2.svg";
import Banner3 from "@/../public/assets/main_page/banner3.svg";

import Image from "next/image";
import { A11y, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
function Banner() {
  return (
    <div className="w-full mb-5">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src={Banner1}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={350}
            height={114}
            alt="carousel-image"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner2}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={350}
            height={114}
            alt="carousel-image"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner3}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={350}
            height={114}
            alt="carousel-image"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;

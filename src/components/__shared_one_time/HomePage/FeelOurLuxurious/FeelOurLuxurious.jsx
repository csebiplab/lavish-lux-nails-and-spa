"use client";
import React from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const images = [
  "/assets/services/services1.png",
  "/assets/services/services2.png",
  "/assets/services/services3.png",
  "/assets/services/services4.png",
  "/assets/services/services5.png",
  "/assets/services/services6.png",
  "/assets/services/services7.png",
  "/assets/services/services8.png",
];

const FeelOurLuxurious = () => {
  return (
    <div>
      <div className="flex justify-center items-center pb-[25px]">
        <HeadingIcon text={headingIconText.feelOurLuxurious__headingIconText} />
      </div>
      <div>
        <Image
          src="/assets/images/fol1.png"
          alt="FeelOurLuxurious image"
          width={432}
          height={287}
          className="w-[432px] md:w-[1020px] xl:w-full h-[287px] md:h-[506px] xl:h-[838px]"
        />
      </div>
      {/* ==================== swiper slider ================ */}
      <div className="container -mt-[50px] md:-mt-[60px] 5xl:-mt-[100px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {images.map((slideInfo, index) => (
            <SwiperSlide
              key={index}
              className={`px-[12px] md:px-0 !h-auto !md:h-full`}
            >
              <div className="w-full !h-full">
                <div className="">
                  <Image
                    src={slideInfo}
                    alt="feel our luxurious image"
                    width={370}
                    height={310}
                    className="w-[370px] h-[310px] md:w-[172px] md:h-[228px] 5xl:w-[335px] 5xl:h-[443px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeelOurLuxurious;

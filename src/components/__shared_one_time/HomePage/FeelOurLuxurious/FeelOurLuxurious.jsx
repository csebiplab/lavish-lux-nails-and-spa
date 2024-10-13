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

// large device 
const images = [
  "/assets/lavish/services/service1.png",
  "/assets/lavish/services/service2.png",
  "/assets/lavish/services/service3.png",
  "/assets/lavish/services/service4.png",
  "/assets/lavish/services/service1.png",
  "/assets/lavish/services/service2.png",
  "/assets/lavish/services/service3.png",
  "/assets/lavish/services/service4.png",
];
// small device 
const smallImages = [
  "/assets/lavish/services/feel_our1.png",
  "/assets/lavish/services/feel_our2.png",
  "/assets/lavish/services/feel_our3.png",
  "/assets/lavish/services/feel_our4.png",
];

const FeelOurLuxurious = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center pb-[25px]">
          <HeadingIcon
            text={headingIconText.feelOurLuxurious__headingIconText}
          />
        </div>
        <div>
          <Image
            src="/assets/lavish/services/service.png"
            alt="FeelOurLuxurious image"
            width={1920}
            height={569}
            className="w-full"
          />
        </div>
        {/* ==================== swiper slider ================ */}
        <div className=" -mt-[50px] md:-mt-[60px] 5xl:-mt-[100px]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={6000}
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
                      width={294}
                      height={350}
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden">
      <div className="flex justify-center items-center pb-[25px]">
          <HeadingIcon
            text={headingIconText.feelOurLuxurious__headingIconText}
          />
        </div>
        <div>
          <Image
            src="/assets/lavish/services/feel_our.png"
            alt="FeelOurLuxurious image"
            width={432}
            height={352}
            className="w-full"
          />
        </div>
        {/* ==================== swiper slider ================ */}
        <div className="container -mt-[50px] md:-mt-[60px] 5xl:-mt-[100px]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={6000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={12}
          >
            {smallImages.map((slideInfo, index) => (
              <SwiperSlide
                key={index}
                className={`px-[12px] md:px-0 !h-auto !md:h-full`}
              >
                <div className="w-full !h-full">
                  <div className="">
                    <Image
                      src={slideInfo}
                      alt="feel our luxurious image"
                      width={340}
                      height={293}
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeelOurLuxurious;

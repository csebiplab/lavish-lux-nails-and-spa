"use client";

import "./Review.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperNavButtons } from "./SwiperSliderButton";
import Image from "next/image";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1025: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const reviews = [
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Great place to relax and get pampered. Great service and professional staff. Highly recommend you come and experience this place.",
    author: "Sandra Serrao",
    address: "Mississauga",
  },
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Great atmosphere, staff, and service! Great place to be pampered! 👍 Services Pedicure, Manicure",
    author: "Jennifer Xuan",
    address: "Mississauga",
  },
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Got manicure and pedicure done and they did an amazing job! Staff is very friendly and very detailed oriented. Services Pedicure, Manicure",
    author: "jay pat",
    address: "Mississauga",
  },
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Great place to relax and get pampered. Great service and professional staff. Highly recommend you come and experience this place.",
    author: "Sandra Serrao",
    address: "Mississauga",
  },
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Great atmosphere, staff, and service! Great place to be pampered! 👍 Services Pedicure, Manicure",
    author: "Jennifer Xuan",
    address: "Mississauga",
  },
  {
    google: "/assets/images/google.png",
    star: "/assets/images/five_star.png",
    reviewText:
      "Got manicure and pedicure done and they did an amazing job! Staff is very friendly and very detailed oriented. Services Pedicure, Manicure",
    author: "jay pat",
    address: "Mississauga",
  },
];

const Review = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="">
          <div className="flex justify-center pb-[25px]">
            <HeadingIcon text={headingIconText.review__headingIconText} />
          </div>

          {/* ==================== swiper slider ================ */}
          <div>
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
              {reviews.map((slideInfo, index) => (
                <SwiperSlide
                  key={index}
                  className={`px-[12px] md:px-0 !h-auto !md:h-full`}
                >
                  <div className="w-full !h-full card-sd bg-primary-700">
                    <div className="text-center pt-[8px] pb-[10px] px-[12px]">
                      <Image
                        className="pb-[10px]"
                        src={slideInfo?.google}
                        alt="google image"
                        width={148}
                        height={85}
                      />
                      <Image
                        src={slideInfo?.star}
                        alt="star icon"
                        width={210}
                        height={31}
                      />

                      <p className="text-lg font-medium py-[10px] text-left text-balck">
                        {slideInfo?.reviewText}
                      </p>
                      <p className="text-[15px] font-semibold pb-[5px] text-left text-black">
                        {slideInfo?.author}
                      </p>
                      <p className="text-xs font-medium text-dark-100 text-left">
                        {slideInfo?.address}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

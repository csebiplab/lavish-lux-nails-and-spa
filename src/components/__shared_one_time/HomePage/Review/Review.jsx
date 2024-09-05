"use client";
import Image from "next/image";

import google from "../../../../../public/assets/images/google.png";
import review from "../../../../../public/assets/images/five_star.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
// import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const reviews = [
  {
    reviewText:
      "Great place to relax and get pampered. Great service and professional staff. Highly recommend you come and experience this place.",
    author: "Sandra Serrao",
    address: "Mississauga",
  },
  {
    reviewText:
      "Great atmosphere, staff, and service! Great place to be pampered!                       👍 Services Pedicure, Manicure",
    author: "Jennifer Xuan",
    address: "Mississauga",
  },
  {
    reviewText:
      "Got manicure and pedicure done and they did an amazing job! Staff is very friendly and very detailed oriented. Services Pedicure, Manicure",
    author: "jay pat",
    address: "Mississauga",
  },
  
];

const Review = () => {
  return (
    <div >
      <div className="container">
        <div className="padding__all">
        <div className="flex justify-center items-center">
              <HeadingIcon text={headingIconText.review__headingIconText}/>
            </div>
          {/* =================== Card Section =============== */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            // slidesPerView={5}
            speed={3000}
            allowTouchMove={false}
            // modules={[Autoplay,Navigation, Scrollbar]}
            breakpoints={breakpoints}
          >
            {reviews.map(({ address, author, reviewText }, i) => (
              <SwiperSlide
                key={i}
                className={`text-center py-4 lg:py-10 md:pr-[21px] !w-full !md:h-full`}
              >
                <div className="cart__bg !w-full md:w-[500px] !h-[250px] md:h-full p-[14px] md:mx-0 mx-auto">
                  <Image
                    src={google}
                    width={89.92}
                    height={51}
                    alt="google"
                    className="mb-2"
                  />
                  <Image
                    src={review}
                    width={83}
                    height={12}
                    alt="google"
                    className=""
                  />

                  <div className="text-start">
                    <p className="text-sm md:text-[12px] mt-4  text-black leading-[22px] md:leading-6">
                      {reviewText}
                    </p>
                    <p className="font-semibold lg:text-sm text-sm mt-3">
                      {author}
                    </p>
                    <p className="text-[#4A4A4A] text-[8px] mt-2">{address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperNavButtons /> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;

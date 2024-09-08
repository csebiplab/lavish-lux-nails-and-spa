"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Services.css";
// import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1040: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const services = [
  {
    id : 1,
    img : "/assets/images/services1.png",
    title : "Tranquil Atmosphere",
    desc : "Experience pure tranquility at our nail spa sanctuary, where every moment is a serene escape from the chaos of daily life."
  },
  {
    id : 2,
    img : "/assets/images/services2.png",
    title : "Hygiene",
    desc : "Indulge with confidence, knowing that our top-tier hygiene standards are designed to protect and delight you."
  },
  {
    id : 3,
    img : "/assets/images/services3.png",
    title : "Nail Artistry",
    desc : "Elevate your nail aesthetics with our exceptional artistry, where every design is a bespoke reflection of your unique style."
  },
  {
    id : 4,
    img : "/assets/images/services1.png",
    title : "Tranquil Atmosphere",
    desc : "Experience pure tranquility at our nail spa sanctuary, where every moment is a serene escape from the chaos of daily life."
  },
  {
    id : 5,
    img : "/assets/images/services2.png",
    title : "Hygiene",
    desc : "Indulge with confidence, knowing that our top-tier hygiene standards are designed to protect and delight you."
  },
  {
    id : 6,
    img : "/assets/images/services3.png",
    title : "Nail Artistry",
    desc : "Elevate your nail aesthetics with our exceptional artistry, where every design is a bespoke reflection of your unique style."
  },
  
];

const Services = () => {
  return (
    <div className="services__bg mx-8 md:mx-0 5xl:mx-3">
      <div className="container py-[37px] md:py-[51px] xl:py-[57px]">
        <div className="">
          {/* =================== Card Section =============== */}
          <Swiper
            className=""
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
            {services.map(({ title, desc, img }, i) => (
              <SwiperSlide
                key={i}
              >
                <div className="">
                  <Image src={img} alt={title} width={62} height={62} className="border border-primary p-[5px] rounded-full bg-primary-50 w-[62px] h-[62px] mx-auto"/>
                  <div className="text-center">
                    <p className="text-4xl font-normal text-black py-[16px]">{title}</p>
                    <p className="text-lg font-normal text-dark-50">{desc}</p>
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

export default Services;

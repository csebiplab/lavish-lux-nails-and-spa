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
    spaceBetween: 60,
  },
};

const services = [
  {
    id: 1,
    img: "/assets/images/services1.png",
    title: "Tranquil Atmosphere",
    desc: "Experience pure tranquility at our nail spa sanctuary, where every moment is a serene escape from the chaos of daily life.",
  },
  {
    id: 2,
    img: "/assets/images/services2.png",
    title: "Hygiene",
    desc: "Indulge with confidence, knowing that our top-tier hygiene standards are designed to protect and delight you.",
  },
  {
    id: 3,
    img: "/assets/images/services3.png",
    title: "Nail Artistry",
    desc: "Elevate your nail aesthetics with our exceptional artistry, where every design is a bespoke reflection of your unique style.",
  },
  {
    id: 4,
    img: "/assets/images/services1.png",
    title: "Tranquil Atmosphere",
    desc: "Experience pure tranquility at our nail spa sanctuary, where every moment is a serene escape from the chaos of daily life.",
  },
  {
    id: 5,
    img: "/assets/images/services2.png",
    title: "Hygiene",
    desc: "Indulge with confidence, knowing that our top-tier hygiene standards are designed to protect and delight you.",
  },
  {
    id: 6,
    img: "/assets/images/services3.png",
    title: "Nail Artistry",
    desc: "Elevate your nail aesthetics with our exceptional artistry, where every design is a bespoke reflection of your unique style.",
  },
];

const Services = () => {
  return (
    <div className="">
      <div data-aos="fade-down" className=" container padding__top">
        <div className="services__bg py-[23px] px-1">
          {/* =================== Card Section =============== */}
          <Swiper
            className=""
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: true,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
          >
            {services.map(({ title, desc, img }, i) => (
              <SwiperSlide
                key={i}
              >
                <div className="px-2 5xl:px-4">
                  <Image src={img} alt={title} width={62} height={62} className="border border-primary p-[5px] rounded-full bg-primary-50 w-[62px] h-[62px] mx-auto"/>
                  <div className="text-center">
                    <p className="font-family-secondary text-4xl font-normal text-black py-[16px]">{title}</p>
                    <p className="text-lg font-normal text-dark-50">{desc}</p>
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

export default Services;

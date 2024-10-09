import React from "react";
import "./BannerSession.css";
import Image from "next/image";
import BookNow from "@/components/common/Button/BookNow";
import Link from "next/link";

const BannerSession = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden md:block bannerSession__bg container">
        <div className="relative h-full flex flex-col items-center justify-center">
          <Image
            src="/assets/lavish/images/hero__content.png"
            alt="hero content"
            width={1350}
            height={463}
            className="w-full"
          />
          <div className="absolute top-[120px] 5xl:top-[160px] left-[100px]">
            <h1 className="font-family-secondary text-[42px] xl:text-[55px] 5xl:text-[75px] font-normal text-white leading-[42px] xl:leading-[55px] 5xl:leading-[75px] pb-[20px] 5xl:pb-[25px]">
              Lavish Lux Nails & Spa <br />{" "}
              <span className="text-[28px] xl:text-[34px] 5xl:text-[45px]">
                Best Nail Salon in Mississauga
              </span>
            </h1>
            <Link href="tel : (905) 973-6669">
              <BookNow />
            </Link>
          </div>
        </div>
      </div>
      {/* medium device  */}
      <div className="block md:hidden">
        <div className="sm__banner__bg container">
          <div className="h-full flex flex-col justify-center items-start">
            <h1 className="font-family-secondary text-[42px] font-normal text-white leading-[42px] pb-[20px]">
              Lavish Lux Nails & Spa <br />{" "}
              <span className="text-[28px">Best Nail Salon in Mississauga</span>
            </h1>
            <Link href="tel : (905) 973-6669">
              <BookNow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSession;

import React from "react";
import "./BannerSession.css";
import Image from "next/image";

const BannerSession = () => {
  return (
    <div>
      <div className="bannerSession__bg container">
        <div className="relative h-full flex flex-col items-center justify-center">
          <Image
            src="/assets/lavish/images/hero__content.png"
            alt="hero content"
            width={1350}
            height={463}
            className="w-full"
          />
          <div className="absolute top-[100px] 5xl:top-[160px] left-[100px]">
            <h1 className="font-family-secondary text-[75px] font-normal text-white leading-[75px]">
              Lavish Lux Nails & Spa <br />{" "}
              <span className="text-[45px]">
                Best Nail Salon in Mississauga
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSession;
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
        <div data-aos="fade-up" className=" relative h-full flex flex-col items-center justify-center">
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
            <Link
              href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              rel="nofollow"
              target="_blank"
            >
              <BookNow />
            </Link>
          </div>
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden">
        <div className="sm__banner__bg px-[30px] sm:px-[40px]">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="font-family-secondary text-[36px] sm:text-[42px] font-normal text-white leading-[42px] pb-[30px] sm:pb-[35px] text-center">
              Lavish Lux Nails & Spa <br />{" "}
              <span className="text-[24px] sm:text-[30px">
                Best Nail Salon in Mississauga
              </span>
            </h1>
            <div className="w-full flex justify-center items-center">
              <Link
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                rel="nofollow"
                target="_blank"
              >
                <BookNow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSession;

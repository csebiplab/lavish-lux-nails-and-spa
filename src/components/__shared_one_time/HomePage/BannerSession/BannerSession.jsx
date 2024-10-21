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
        <div
          data-aos="fade-up"
          className=" relative h-full flex flex-col items-center justify-center"
        >
          <Image
            src="/assets/lavish/images/hero__content.png"
            alt="hero content"
            width={1350}
            height={463}
            className="w-full"
          />
          <div className="absolute top-[80px] xl:top-[120px] 5xl:top-[160px] left-[100px]">
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
      
      <div className="block md:hidden overflow-x-hidden">
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
                <button className="bg-secondary hover:bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex justify-center items-center space-x-3 clip-path-custom">
                <span>Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                >
                  <path
                    d="M34 10.625C29.3056 10.625 25.5 15.382 25.5 21.25"
                    stroke="white"
                  />
                  <path d="M0 10.625H34" stroke="white" />
                  <path
                    d="M25.5 0C25.5 5.868 29.3056 10.6249 34 10.625"
                    stroke="white"
                  />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default BannerSession;

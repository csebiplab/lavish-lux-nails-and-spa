import React from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden 5xl:block">
        <div className="large_banner_bg ">
          <div className="relative container h-full flex justify-center items-center">
            <Image
              // src="/assets/images/large_hero.png"
              src="/assets/images/large_device_banner.png"
              alt="large device hero image"
              width={1350}
              height={668}
            />
            <div className="absolute top-[305px] left-[400px]">
              <h1 className="text-left text-[75px] font-400 leading-tight text-primary">
                Lavish Lux Nails & Spa <br /> Best Nail Salon in <br /> Mississauga
              </h1>
              <div className="pt-[25px]">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <button className="flex items-center gap-[6px] text-base font-semibold text-white p-[15px] bg-secondary rounded-lg">
                  Book Now
                  <svg
                    className="pt-[5px]"
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

      {/* small device  */}
      <div className="block md:hidden small_bg flex flex-col items-center justify-center">
        <h1 className="text-[42px] font-normal text-center text-primary px-[40px] pb-[35px]">
          Lavish Lux Nails & Spa Best Nail Salon in Mississauga
        </h1>
        <Link
          rel="nofollow"
          target="_blank"
          href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
        >
          <button className="flex items-center gap-[6px] text-base font-semibold text-white p-[15px] bg-secondary rounded-lg">
            Book Now
            <svg
              className="pt-[5px]"
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
  );
};

export default Banner;

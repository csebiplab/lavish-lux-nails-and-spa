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
              height={638}
            />
            <div className="absolute top-[305px] left-[400px]">
              <h1 className="font-family-secondary text-left text-[75px] font-normal leading-tight text-primary">
                Lavish Lux Nails & Spa <br /> Best Nail Salon in <br />{" "}
                Mississauga
              </h1>
              <div className="pt-[25px]">
                
                <Link
                  rel="nofollow"
                  target="_blank"
                  href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                >
                  <Image
                    src="/assets/buttons/large_d_banner.png"
                    alt="book now"
                    width={200}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden small_bg flex flex-col items-center justify-center">
        <h1 className="font-family-secondary text-[38px] font-normal text-center text-primary px-[6px] pb-[35px]">
          Lavish Lux Nails & Spa <br />
          Best Nail Salon <br /> in Mississauga
        </h1>
        
        <Link
          rel="nofollow"
          target="_blank"
          href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
        >
          <Image
            src="/assets/buttons/book_now_sm_banner.png"
            alt="book now"
            width={200}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;

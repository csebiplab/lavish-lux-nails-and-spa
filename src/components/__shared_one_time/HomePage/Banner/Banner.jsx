"use client"
import React, { useState } from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  const [bookNow, setBookNow] = useState(true);
  return (
    <div>
      {/* large device  */}
      <div className="hidden xl:block">
        <div className="large_banner_bg w-full lg:h-[500px] xl:h-[520px] 2xl:h-[600px] 3xl:h-[650px] 4xl:h-[700px] 5xl:h-[840px]">
          <div className="relative container h-full flex justify-center items-center">
            <Image
              // src="/assets/images/large_hero.png"
              src="/assets/images/large_device_banner.png"
              alt="large device hero image"
              width={1350}
              height={637}
              className="md:w-[1110px] lg:w-[1150px] xl:w-[890px] 2xl:w-[1230px] 3xl:w-[1270px] 4xl:w-[1310px] 5xl:w-[1350px] h-[430] lg:h-[440px] xl:h-[420px] 2xl:h-[560px] 3xl:h-[580px] 4xl:h-[610px] 5xl:h-[650px]"
            />
            <div className="absolute md:top-[90px] lg:top-[100px] xl:top-[150px] 2xl:top-[135px] 3xl:top-[150px] 4xl:top-[170px] 5xl:top-[230px] md:left-[220px] lg:left-[250px] xl:left-[330px] 2xl:left-[310px] 3xl:left-[350px] 4xl:left-[400px] 5xl:left-[490px]">
              <h1 className="font-family-secondary text-left md:text-[45px] lg:text-[50px]  xl:text-[40px] 2xl:text-[60px] 3xl:text-[65px] 4xl:text-[70px] 5xl:text-[75px] font-normal leading-tight text-primary">
                Lavish Lux Nails & Spa <br /> Best Nail Salon <br /> 
                in Mississauga
              </h1>
              <div className="pt-[25px]">
                
                <Link
                  rel="nofollow"
                  target="_blank"
                  href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"

                  onMouseEnter={() => setBookNow(false)}
                onMouseLeave={() => setBookNow(true)}
                >
                  {
                    bookNow ? <Image
                    src="/assets/button/d_banner_book_now_btn.png"
                    alt="book now"
                    width={200}
                    height={38}
                  /> : <Image
                  src="/assets/button/h_banner_book_now_btn.png"
                  alt="book now"
                  width={200}
                  height={38}
                />
                  }
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block xl:hidden small_bg flex flex-col items-center justify-center">
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

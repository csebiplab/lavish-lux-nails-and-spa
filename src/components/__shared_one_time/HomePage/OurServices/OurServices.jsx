import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

import "./OurServices.css";

const servicesData = [
  {
    id: 1,
    img: "/assets/lavish/icons/ourServices1.png",
    title: "Pedicure",
  },
  {
    id: 2,
    img: "/assets/lavish/icons/ourServices2.png",
    title: "Artificial Nails",
  },
  {
    id: 3,
    img: "/assets/lavish/icons/ourServices3.png",
    // title: "Additional Services",
    title: "Additional",
  },
];
const servicesData1 = [
  {
    id: 1,
    img: "/assets/lavish/icons/ourServices4.png",
    title: "Manicure",
  },
  {
    id: 2,
    img: "/assets/lavish/icons/ourServices5.png",
    title: "Waxing",
  },
  {
    id: 3,
    img: "/assets/lavish/icons/ourServices6.png",
    title: "Design",
  },
];

const OurServices = () => {
  return (
    <div id="service">
      <div className="container padding__bottom">
        <div className="w-full flex justify-center items-center">
          <HeadingIcon
            text={headingIconText.ourServicesAtLavish__headingIconText}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-10">
          <div className="xl:col-span-3 flex justify-center justify-start pt-[37px] xl:pt-[28px]">
            <Image
              src="/assets/lavish/images/our_services.png"
              alt="our service image"
              width={780}
              height={686}
              className="w-full flex justify-start transition delay-300 duration-300 ease-in-out hover:scale-105"
            />
          </div>
          {/* large device  */}
          <div className="hidden xl:block xl:col-span-3">
            <div className="w-full">
              <div className=" flex justify-end gap-[25px] lg:gap-[28px]">
                <div className="mt-[60px]">
                  {servicesData?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="cart__bg  flex flex-col items-center justify-center mt-[20px]"
                      >
                        <Image
                          src={data?.img}
                          alt={data?.title}
                          width={113}
                          height={113}
                          className="w-full px-[55px] pt-[18px]"
                        />
                        <p className="font-family-secondary text-2xl font-normal text-black pb-[15px]">
                          {data?.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  {servicesData1?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="cart__bg flex flex-col items-center justify-center mt-[20px]"
                      >
                        <Image
                          src={data?.img}
                          alt={data?.title}
                          width={113}
                          height={113}
                          className="w-full  px-[55px] pt-[18px]"
                        />
                        <p className="font-family-secondary text-2xl font-normal text-black pb-[15px]">
                          {data?.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* small device  */}

          <div className="block md:hidden xl:col-span-3">
            <div className="w-full flex justify-center">
              <div className="flex justify-end gap-[20px] md:gap-[28px]">
                <div className="mt-[60px]">
                  {servicesData?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="cart__bg_sm flex flex-col items-center justify-center gap-[25px] md:gap-[28px] mt-[20px]"
                      >
                        <Image
                          src={data?.img}
                          alt={data?.title}
                          width={94}
                          height={94}
                          className="w-full px-[40px] pt-[15px] pb-[5px]"
                        />
                        <p className="font-family-secondary text-2xl font-normal text-black pb-[14px] leading-normal">
                          {data?.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  {servicesData1?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="cart__bg_sm flex flex-col items-center justify-center mt-[20px]"
                      >
                        <Image
                          src={data?.img}
                          alt={data?.title}
                          width={94}
                          height={94}
                          className="w-full px-[40px] pt-[15px] pb-[5px]"
                        />
                        <p className="font-family-secondary text-2xl font-normal text-black pb-[14px] leading-normal">
                          {data?.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

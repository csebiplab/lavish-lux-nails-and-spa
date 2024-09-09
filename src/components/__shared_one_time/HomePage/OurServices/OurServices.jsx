import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

import "./OurServices.css";

const servicesData = [
  {
    id: 1,
    img: "/assets/images/ourServices1.png",
    title: "Pedicure",
  },
  {
    id: 2,
    img: "/assets/images/ourServices2.png",
    title: "Artificial Nails",
  },
  {
    id: 3,
    img: "/assets/images/ourServices3.png",
    // title: "Additional Services",
    title: "Additional",
  },
];
const servicesData1 = [
  {
    id: 1,
    img: "/assets/images/ourServices4.png",
    title: "Manicure",
  },
  {
    id: 2,
    img: "/assets/images/ourServices5.png",
    title: "Waxing",
  },
  {
    id: 3,
    img: "/assets/images/ourServices6.png",
    title: "Design",
  },
];

const ourServices = [
    {
        id: 1,
        img: "/assets/images/ourServices1.png",
        title: "Pedicure",
      },
      {
        id: 2,
        img: "/assets/images/ourServices2.png",
        title: "Artificial Nails",
      },
      {
        id: 3,
        img: "/assets/images/ourServices3.png",
        title: "Additional Services",
      },
      {
        id: 4,
        img: "/assets/images/ourServices4.png",
        title: "Manicure",
      },
      {
        id: 5,
        img: "/assets/images/ourServices5.png",
        title: "Waxing",
      },
      {
        id: 6,
        img: "/assets/images/ourServices6.png",
        title: "Design",
      },
]

const OurServices = () => {
  return (
    <div id="service">
      <div className="container padding__bottom">
        <div className="w-full flex justify-center items-center">
          <HeadingIcon
            text={headingIconText.ourServicesAtLavish__headingIconText}
          />
        </div>
        <div className="grid grid-cols-1 5xl:grid-cols-6 gap-10">
          <div className="5xl:col-span-3 flex justify-center justify-start pt-[37px] 5xl:pt-[28px]">
            <Image
              src="/assets/images/our_services.png"
              alt="about us image"
              width={440}
              height={330}
              className="w-full flex justify-start transition delay-300 duration-300 ease-in-out hover:scale-105"
            />
          </div>
          {/* large device  */}
          <div className="hidden 5xl:block 5xl:col-span-3">
            <div className=" w-full">
            <div className=" flex justify-end gap-[25px] md:gap-[28px]">
              <div className="mt-[60px]">
                {servicesData?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      className="cart__bg flex flex-col items-center justify-center gap-[25px] md:gap-[28px] mt-[20px]"
                    >
                      <Image
                        src={data?.img}
                        alt={data?.title}
                        width={126}
                        height={126}
                        className=""
                      />
                      <p className="font-family-secondary text-2xl font-normal text-black">
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
                      className="cart__bg flex flex-col items-center justify-center gap-[25px] md:gap-[28px] mt-[20px]"
                    >
                      <Image
                        src={data?.img}
                        alt={data?.title}
                        width={126}
                        height={126}
                        className=""
                      />
                      <p className="font-family-secondary text-2xl font-normal text-black">
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

          <div className="block 5xl:hidden 5xl:col-span-3">
            <div className="w-full">
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
                        width={93}
                        height={93}
                        className="w-[93px] h-[93px]"
                      />
                      <p className="font-family-secondary text-2xl font-normal text-black">
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
                      className="cart__bg_sm flex flex-col items-center justify-center gap-[25px] md:gap-[28px] mt-[20px]"
                    >
                      <Image
                        src={data?.img}
                        alt={data?.title}
                        width={93}
                        height={93}
                        className="w-[93px] h-[93px]"
                      />
                      <p className="font-family-secondary text-2xl font-normal text-black">
                        {data?.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
            
          </div>

          {/* <div className="block 5xl:hidden flex flex-col items-center">
            {
                ourServices?.map((data)=>{
                    return <div
                    key={data?.id}
                    className="cart__bg flex flex-col items-center justify-center gap-[25px] mt-[20px]"
                  >
                    <Image
                      src={data?.img}
                      alt={data?.title}
                      width={126}
                      height={126}
                      className=""
                    />
                    <p className="text-2xl font-normal text-black">
                      {data?.title}
                    </p>
                  </div>
                })
            }
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

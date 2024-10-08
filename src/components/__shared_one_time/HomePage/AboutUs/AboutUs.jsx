import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="full__section_l_p padding__top padding__bottom  pr-3 md:pr-0">
        <div className="grid grid-cols-1 xl:grid-cols-6 5xl:grid-cols-7 gap-[15px]">
          <div className="order-2 xl:order-1 xl:col-span-3 ">
            <div className="flex flex-col justify-start xl:justify-center items-center md:items-start">
              <div className="">
                <HeadingIcon text={headingIconText.aboutUs__headingIconText} />
              </div>
              <p className="text-lg font-medium leading-9 text-black  text-center xl:text-left ">
                Our mission is to deliver an exceptional beauty experience.
                Customer satisfaction is our only goal. We want every client to
                have a relaxing, VIP experience when at Lavish Lux. We offer
                services such as waxing, manicures, pedicures, eyelash
                extensions, offering our clientele a one-stop destination for
                those seeking a complete, rejuvenating experience. Our
                hand-picked team of highly qualified nail artisans provide
                results that are second to none. Our technicians are constantly
                updating their skills and techniques as trends and technologies
                evolve in the beauty industry.
              </p>
            </div>
          </div>
          <div className="order-1 xl:order-2 xl:col-span-3 5xl:col-span-4">
            <div>
              <Image
                src="/assets/lavish/images/about__us.png"
                alt="about us image"
                width={822}
                height={566}
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

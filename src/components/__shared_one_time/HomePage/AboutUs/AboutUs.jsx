import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about">
      {/* small and extra large div  */}
      <div className="block lg:hidden xl:block full__section_l_p padding__top padding__bottom  pr-3 md:pr-0">
        <div className="grid grid-cols-1 xl:grid-cols-6 5xl:grid-cols-7 gap-[15px]">
          <div data-aos="fade-right" className="order-2 xl:order-1 xl:col-span-3 ">
            <div className="h-full flex flex-col justify-start 5xl:justify-center items-center md:items-start">
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
          <div data-aos="fade-left" className="order-1 xl:order-2 xl:col-span-3 5xl:col-span-4">
            <div>
              <Image
                src="/assets/lavish/images/about__us.png"
                alt="about us image"
                width={822}
                height={566}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* large device  */}
      <div className="container padding__all hidden lg:block xl:hidden">
          {/* img part  */}
          <div>
            <Image className="w-full" src="/assets/md-device/about_us.png" alt="about us image" width={736} height={509}/>
          </div>
          {/* content part  */}
          <div>
          <div className="w-full flex justify-center items-center pt-[18px]">
                <HeadingIcon text={headingIconText.aboutUs__headingIconText} />
              </div>
            <p className="text-lg font-medium text-black leading-[35px] text-center ">Lavish Lux Nails & Spa is not just a destination; it's a transformative experience in the heart of Mississauga. Renowned for its blend of luxury and expert craftsmanship, our salon is where indulgence meets excellence. Each visit promises a journey into unparalleled beauty and tranquility, with services ranging from flawless manicures to breathtaking nail art, all tailored to your unique style. Our dedicated team of skilled technicians ensures that every detail is perfected, providing personalized attention that leaves you feeling cherished and looking spectacular. Step into Lavish Lux and discover why we are the pinnacle of elegance and sophistication in Mississauga's beauty scene. Experience the difference that true luxury and expert care can make, and elevate your nail care to a new level of perfection.</p>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;

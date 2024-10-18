"use client";
import Link from "next/link";

import Image from "next/image";

import "./footer.css";

const servicesData = [
  {
    id: 1,
    service: "Manicure",
    img: "/assets/lavish/footer_icon/manicure.png",
  },
  {
    id: 2,
    service: "Pedicure",
    img: "/assets/lavish/footer_icon/pedicure.png",
  },
  {
    id: 3,
    service: "Waxing",
    img: "/assets/lavish/footer_icon/waxing.png",
  },
  {
    id: 4,
    service: "Design",
    img: "/assets/lavish/footer_icon/design.png",
  },
  {
    id: 5,
    service: "Artificial Nails",
    img: "/assets/lavish/footer_icon/artificialNails.png",
  },
  {
    id: 6,
    service: "Additional Services",
    img: "/assets/lavish/footer_icon/additionalServices.png",
  },
];

const navigationData = [
  {
    id: 1,
    navigation: "Blogs",
  },
  {
    id: 2,
    navigation: "Contact Us",
  },
  {
    id: 3,
    navigation: "Testimonial",
  },
  {
    id: 4,
    navigation: "Gallery",
  },
  {
    id: 5,
    navigation: "Sitemap",
  },
];

const Footer = () => {
  return (
    <footer className="">
      {/* large device  */}
      <div className="hidden xl:block">
        <div
          data-aos="fade-up"
          className="footer__bg container pt-[20px] pb-[5px] 5xl:py-[24px]"
        >
          <div className="flex items-center gap-[50px] 5xl:gap-[60px]">
            <div className="w-full h-[2px] bg-primary" />
            <div className="w-2/3">
              <Image
                src="/assets/lavish/images/footer__logo.png"
                alt="footer logo"
                width={319}
                height={89}
                className="w-full mx-auto pb-[12px] 5xl:pb-[15px]"
              />
            </div>
            <div className="w-full h-[2px] bg-primary" />
          </div>
          <p className="text-base 5xl:text-lg font-normal text-white text-center pb-[25px] 5xl:pb-[35px]">
            Find the best nail salon in Mississauga for impeccable manicures &
            pedicures. Expert service & stunning results await! Book now.
          </p>
          <div className="grid grid-cols-12 gap-6 5xl:gap-[54px]">
            {/* first div  */}
            <div className="col-span-3">
              <p className="text-[22px] 5xl:text-[25px] font-semibold text-white pb-[18px] 5xl:pb-[28px]">
                Ours Services
              </p>
              <div className="text-white">
                {servicesData?.map((data) => {
                  return (
                    <ul key={data?.id}>
                      <li className="flex items-center gap-[6px] leading-normal py-[10px] 5xl:py-[13px] text-base 5xl:text-lg text-white font-medium">
                        <Image
                          src={data?.img}
                          alt={data?.service}
                          width={21}
                          height={21}
                        />{" "}
                        {data?.service}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            {/* second div  */}
            <div className="col-span-2">
              <p className="text-[22px] 5xl:text-[25px] font-semibold text-white pb-[18px] 5xl:pb-[28px]">
                Navigation
              </p>
              <div>
                {navigationData?.map((data) => {
                  return (
                    <ul key={data?.id}>
                      <li className="text-base 5xl:text-lg text-white font-medium leading-normal py-[10px] 5xl:py-[13px]">
                        {data?.navigation}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            {/* third div  */}
            <div className="col-span-3">
              <div className="border-[4px] rounded-[8px] border-primary ">
                <p className="text-[22px] 5xl:text-[25px] font-semibold text-white text-center pb-[18px] 5xl:pb-[28px] pt-[8px]">
                  Open Hours
                </p>
                <span>
                  <svg
                    className="px-[20px] 5xl:px-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="24"
                    viewBox="0 0 424 24"
                    fill="none"
                  >
                    <path
                      d="M0.452994 12L12 23.547L23.547 12L12 0.452994L0.452994 12ZM423.547 12L412 0.452994L400.453 12L412 23.547L423.547 12ZM12 14H412V10H12V14Z"
                      fill="#C7A43C"
                    />
                  </svg>
                </span>
                <p className="text-base 5xl:text-lg font-medium leading-normal text-white text-center pb-[18px] 5xl:pb-[23px]">
                  Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am
                  ~ 6:00pm <br /> Sun. <br /> 11:00am ~ 5:00pm
                </p>
              </div>
            </div>

            {/* fourth div  */}
            <div className="col-span-4">
              <p className="text-[22px] 5xl:text-[25px] font-semibold text-white pb-[18px] 5xl:pb-[28px]">
                Contact Us
              </p>
              <ul>
                <li className="flex items-start gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-medium leading-normal">
                  <Image
                    src="/assets/icons/map.png"
                    alt="map icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="location:1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                  >
                    1100 Burnhamthorpe Rd <br className="hidden lg:block" /> W
                    Unit 16, Mississauga, <br className="hidden lg:block" /> ON
                    L5C 4G4, Canada
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-medium leading-normal py-[20px] 5xl:py-[26px]">
                  <Image
                    src="/assets/icons/phone.png"
                    alt="phone icon"
                    width={21}
                    height={21}
                  />
                  <Link className="text-white" href="tel:(905) 973-6669">
                    (905) 973-6669
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-medium leading-normal">
                  <Image
                    src="/assets/icons/email.png"
                    alt="email icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="mail:manager@lavishluxnailsandspa.com"
                  >
                    manager@lavishluxnailsandspa.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[10px] container flex justify-between items-center">
          <div className="flex items-center gap-[15px]">
            <p className="text-base font-semibold text-white">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/images/goKundu__fb.png"
              alt="gokundu logo"
              width={141}
              height={36}
            />
          </div>
          <div>
            <p className="text-base font-medium text-white">
              © All Copyright 2024 by Lavish Lux Nail Spa
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-medium text-white">
              Terms & Condition
            </p>
            <p className="text-base font-medium text-white">Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* medium device  */}
      <div className="hidden lg:block xl:hidden">
        <div className="footer__bg container py-[35px]">
          <div className="flex itmes-center gap-[50px] 5xl:gap-[92px]">
            <span>
              <svg
                className="mt-6"
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="30"
                viewBox="0 0 682 30"
                fill="none"
              >
                <path
                  d="M681.65 15L667.217 0.566243L652.783 15L667.217 29.4338L681.65 15ZM0 17.5L667.217 17.5V12.5L0 12.5L0 17.5Z"
                  fill="#C7A43C"
                />
              </svg>
            </span>
            <Image
              src="/assets/images/footer_logo.png"
              alt="footer logo"
              width={401}
              height={113}
              className="w-[401px] h-[113px] mx-auto pb-[22px]"
            />
            <span>
              <svg
                className="mt-6"
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="30"
                viewBox="0 0 682 30"
                fill="none"
              >
                <path
                  d="M0.349609 15L14.7834 29.4338L29.2172 15L14.7834 0.566243L0.349609 15ZM682 12.5L14.7834 12.5V17.5L682 17.5V12.5Z"
                  fill="#C7A43C"
                />
              </svg>
            </span>
          </div>
          <p className="text-lg font-normal text-white text-center pb-[18px]">
            Find the best nail salon in Mississauga for impeccable manicures &
            pedicures. Expert service & stunning results await! Book now.
          </p>
          <div className="grid grid-cols-8 gap-12 5xl:gap-[54px]">
            {/* first div  */}
            <div className="col-span-2">
              <p className="text-[25px] font-semibold text-white pb-[28px]">
                Navigation
              </p>
              <ul className="text-white">
                <li className="text-lg font-medium">Blogs</li>
                <li className="text-lg font-medium py-[26px]">Contact Us</li>
                <li className="text-lg font-medium">Testimonial</li>
                <li className="text-lg font-medium py-[26px]">Gallery</li>
                <li className="text-lg font-medium">Sitemap</li>
              </ul>
            </div>
            {/* second div  */}
            <div className="col-span-2">
              <p className="text-[25px] font-semibold text-white pb-[28px]">
                Ours Services
              </p>
              <ul className="text-white">
                <li className="text-lg font-medium">Manicure</li>
                <li className="text-lg font-medium py-[26px]">Pedicure</li>
                <li className="text-lg font-medium">Waxing</li>
                <li className="text-lg font-medium py-[26px]">Design</li>
                <li className="text-lg font-medium">Artificial Nails</li>
                <li className="text-lg font-medium pt-[26px]">
                  Additional Services
                </li>
              </ul>
            </div>
            {/* third div  */}
            <div className="col-span-4">
              <p className="text-[25px] font-semibold text-white pb-[28px]">
                Contact Us
              </p>
              <ul>
                <li className="flex items-start gap-[10px] text-lg font-medium">
                  <Image
                    src="/assets/icons/map.png"
                    alt="map icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="location:1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                  >
                    1100 Burnhamthorpe Rd <br /> W Unit 16, Mississauga, <br />{" "}
                    ON L5C 4G4, Canada
                  </Link>
                </li>
                <li className="flex items-center gap-[10px] text-lg font-medium py-[26px]">
                  <Image
                    src="/assets/icons/phone.png"
                    alt="phone icon"
                    width={21}
                    height={21}
                  />
                  <Link className="text-white" href="tel:(905) 973-6669">
                    (905) 973-6669
                  </Link>
                </li>
                <li className="flex items-center gap-[10px] text-lg font-medium">
                  <Image
                    src="/assets/icons/email.png"
                    alt="email icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="mail:manager@lavishluxnailsandspa.com"
                  >
                    manager@lavishluxnailsandspa.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* fourth div  */}
          <div className="w-1/2 mx-auto pt-[35px]">
            <div className="border-[4px] rounded-[8px] border-primary ">
              <p className="text-[25px] font-semibold text-white text-center pb-[28px] pt-[8px]">
                Open Hours
              </p>
              <span>
                <svg
                  className="px-[20px] 5xl:px-[50px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="auto"
                  height="24"
                  viewBox="0 0 424 24"
                  fill="none"
                >
                  <path
                    d="M0.452994 12L12 23.547L23.547 12L12 0.452994L0.452994 12ZM423.547 12L412 0.452994L400.453 12L412 23.547L423.547 12ZM12 14H412V10H12V14Z"
                    fill="#C7A43C"
                  />
                </svg>
              </span>
              <p className="text-lg font-medium text-white text-center pb-[23px]">
                Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am ~
                6:00pm <br /> Sun. <br /> 11:00am ~ 5:00pm
              </p>
            </div>
          </div>
          {/* fifth div  */}
          <div className="flex justify-between items-center pt-[35px]">
            <div>
              <p className="text-base font-medium text-white">
                © All Copyright 2024 by Lavish Lux Nail Spa
              </p>
            </div>
            <div className="flex items-center justify-between gap-10">
              <p className="text-base font-medium text-white">
                Terms & Condition
              </p>
              <p className="text-base font-medium text-white">Privacy Policy</p>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[9px] container flex justify-center items-center">
          <div className="flex items-center gap-[15px]">
            <p className="text-base font-semibold text-white">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/images/goKundu__fb.png"
              alt="gokundu logo"
              width={141}
              height={36}
            />
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small_footer_image ">
          {/* first div  */}
          <div className="pt-[37px]">
            <Image
              src="/assets/images/footer_logo.png"
              alt="footer logo icon"
              width={228}
              height={65}
              className="w-[228px] h-[65px] mx-auto"
            />
            <p className="text-center pt-[15px] text-base sm:text-lg font-semibold leading-[25px] px-[30px]">
              Find the best nail salon in Mississauga for impeccable manicures &
              pedicures. Expert service & stunning results await! Book now.
            </p>
          </div>
          {/* first div  */}
          <div className="pt-[20px]">
            <p className="text-[22px] sm:text-[25px] font-semibold text-white pb-[16px] sm:pb-[21px] text-center">
              Ours Services
            </p>
            <div className="text-white">
              {servicesData?.map((data) => {
                return (
                  <ul key={data?.id}>
                    <li className="flex items-center justify-center gap-[6px] leading-normal py-[10px] sm:py-[13px] text-base sm:text-lg text-white font-medium">
                      <Image
                        src={data?.img}
                        alt={data?.service}
                        width={21}
                        height={21}
                      />{" "}
                      {data?.service}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          {/* second div  */}
          <div className="pt-[13px]">
            <p className="text-[22px] sm:text-[25px] font-semibold text-white pb-[16px] sm:pb-[20px] text-center">
              Navigation
            </p>
            <div>
              {navigationData?.map((data) => {
                return (
                  <ul key={data?.id}>
                    <li className="text-base sm:text-lg text-white font-medium leading-normal py-[8px] sm:py-[10px] text-center">
                      {data?.navigation}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          {/* third div  */}
          <div className="pt-[20px] ">
            <p className="text-[22px] sm:text-[25px] font-semibold text-white pb-[18px] sm:pb-[22px] text-center">
              Contact Us
            </p>
            <ul className="flex flex-col items-center justify-center">
              <li className="flex items-center gap-[12px] sm:gap-[24px] text-base sm:text-lg font-medium leading-normal">
                <Image
                  src="/assets/icons/map.png"
                  alt="map icon"
                  width={21}
                  height={21}
                />
                <Link
                  className="text-white"
                  href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                >
                  1100 Burnhamthorpe Rd W Unit 16, <br /> Mississauga, ON L5C
                  4G4, Canada
                </Link>
              </li>
              <li className="flex items-center gap-[12px] sm:gap-[24px] text-base sm:text-lg font-medium leading-normal py-[17px] sm:py-[22px]">
                <Image
                  src="/assets/icons/phone.png"
                  alt="phone icon"
                  width={21}
                  height={21}
                />
                <Link className="text-white" href="tel : (905) 973-6669">
                  (905) 973-6669
                </Link>
              </li>
              <li className="flex items-center gap-[12px] sm:gap-[24px] text-base sm:text-lg font-medium leading-normal">
                <Image
                  src="/assets/icons/email.png"
                  alt="email icon"
                  width={21}
                  height={21}
                />
                <Link
                  className="text-white"
                  href="mail : manager@lavishluxnailsandspa.com"
                >
                  manager@lavishluxnailsandspa.com
                </Link>
              </li>
            </ul>
          </div>

          {/* fourth div  */}
          <div className="pt-[32px] px-[30px]">
            <div className="border-[4px] rounded-[8px] border-primary ">
              <p className="text-[22px] sm:text-[25px] font-semibold text-white text-center pb-[10px] sm:pb-[12px] pt-[13px] sm:pt-[17px]">
                Open Hours
              </p>
              <span>
                <svg
                  className="px-[20px] 5xl:px-[50px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="auto"
                  height="24"
                  viewBox="0 0 424 24"
                  fill="none"
                >
                  <path
                    d="M0.452994 12L12 23.547L23.547 12L12 0.452994L0.452994 12ZM423.547 12L412 0.452994L400.453 12L412 23.547L423.547 12ZM12 14H412V10H12V14Z"
                    fill="#C7A43C"
                  />
                </svg>
              </span>
              <p className="text-base sm:text-lg font-medium leading-normal text-white text-center pb-[18px] sm:pb-[23px]">
                Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am ~
                6:00pm <br /> Sun. <br /> 11:00am ~ 5:00pm
              </p>
            </div>
          </div>
          {/* fifth div  */}
          <div className="pt-[50px]">
            <div className="border border-white  mx-[30px]" />
            <p className="text-base font-medium pb-[15px] text-white text-center pt-[20px]">
              © All Copyright 2024 by Lavish Lux Nail & Spa
            </p>
            <div className="flex justify-evenly">
              <p className="text-base font-medium text-white">
                Terms & Condition
              </p>
              <p className="text-base font-medium text-white">Privacy Policy</p>
            </div>
          </div>
          {/* footer bottom  */}
          <div className="flex items-center justify-around pt-[21px] pb-[19px] bg-primary mt-[44px]">
            <p className="text-xs font-semibold text-whtie">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/images/goKundu__fb.png"
              alt="company logo"
              width={112}
              height={28}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

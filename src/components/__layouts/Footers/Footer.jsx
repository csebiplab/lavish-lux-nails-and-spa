"use client";
import Link from "next/link";

import Image from "next/image";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="">
      {/* large device  */}
      <div className="hidden xl:block">
        <div className="footer__bg container py-[100px]">
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
          <p className="text-lg font-normal text-white text-center pb-[55px]">
            Find the best nail salon in Mississauga for impeccable manicures &
            pedicures. Expert service & stunning results await! Book now.
          </p>
          <div className="grid grid-cols-10 gap-10 5xl:gap-[54px]">
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
            <div className="col-span-3">
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
                  Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am
                  ~ 6:00pm <br /> Sun. <br /> 11:00am ~ 5:00pm
                </p>
              </div>
            </div>
            
            {/* fourth div  */}
            <div className="col-span-3">
              <p className="text-[25px] font-semibold text-white pb-[28px]">
                Contact Us
              </p>
              <ul>
                <li className="flex items-center gap-[24px] text-lg font-medium">
                  <Image src="/assets/icons/map.png" alt="map icon" width={21} height={21}/>
                  <Link
                    className="text-white"
                    href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                  >
                    1100 Burnhamthorpe Rd W Unit 16, <br className="hidden 5xl:block"/> Mississauga, ON L5C 4G4,
                    Canada
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-lg font-medium py-[26px]">
                  <Image src="/assets/icons/phone.png" alt="phone icon" width={21} height={21}/>
                  <Link className="text-white" href="tel : (905) 973-6669">
                    (905) 973-6669
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-lg font-medium">
                  <Image src="/assets/icons/email.png" alt="email icon" width={21} height={21}/>
                  <Link
                    className="text-white"
                    href="mail : manager@lavishluxnailsandspa.com"
                  >
                    manager@lavishluxnailsandspa.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[17px] container flex justify-between items-center">
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
        <div className="footer__bg container py-[100px]">
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
          <p className="text-lg font-normal text-white text-center pb-[55px]">
            Find the best nail salon in Mississauga for impeccable manicures &
            pedicures. Expert service & stunning results await! Book now.
          </p>
          <div className="grid grid-cols-7 gap-10 5xl:gap-[54px]">
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
            <div className="col-span-3">
              <p className="text-[25px] font-semibold text-white pb-[28px]">
                Contact Us
              </p>
              <ul>
                <li className="flex items-center gap-[24px] text-lg font-medium">
                  <Image src="/assets/icons/map.png" alt="map icon" width={21} height={21}/>
                  <Link
                    className="text-white"
                    href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                  >
                    1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4,
                    Canada
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-lg font-medium py-[26px]">
                  <Image src="/assets/icons/phone.png" alt="phone icon" width={21} height={21}/>
                  <Link className="text-white" href="tel : (905) 973-6669">
                    (905) 973-6669
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-lg font-medium">
                  <Image src="/assets/icons/email.png" alt="email icon" width={21} height={21}/>
                  <Link
                    className="text-white"
                    href="mail : manager@lavishluxnailsandspa.com"
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
                  Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am
                  ~ 6:00pm <br /> Sun. <br /> 11:00am ~ 5:00pm
                </p>
              </div>
            </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[17px] container flex justify-between items-center">
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
            <p className="text-center pt-[15px] text-lg font-semibold px-[30px]">
              Find the best nail salon in Mississauga for impeccable manicures &
              pedicures. Expert service & stunning results await! Book now.
            </p>
          </div>
          {/* second div  */}
          <div className="pt-[30px]">
            <p className="text-center text-[25px] font-semibold">Navigation</p>
            <ul className="text-center">
              <li className="pt-[20px] pb-[10px] text-lg font-medium">Blogs</li>
              <li className="py-[10px] text-lg font-medium">Contact Us</li>
              <li className="py-[10px] text-lg font-medium">Testimonial</li>
              <li className="py-[10px] text-lg font-medium">Gallery</li>
              <li className="pt-[10px] text-lg font-medium">Sitemap</li>
            </ul>
          </div>
          {/* third div  */}
          <div className="pt-[30px]">
            <p className="text-center text-[25px] font-semibold">Contact Us</p>
            <ul className="text-center ">
              <li className="py-[22px] text-lg font-medium">
                <Link
                  className="text-white"
                  href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                >
                  1100 Burnhamthorpe Rd W Unit 16, <br /> Mississauga, ON L5C
                  4G4, Canada
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link className="text-white" href="tel : (905) 973-6669">
                  (905) 973-6669
                </Link>
              </li>
              <li className="pt-[20px] text-lg font-medium">
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
          <div className="pt-[30px] ">
            <div className="border-4 border-primary rounded-lg pt-[17px] pb-[23px] mx-[30px]">
              <p className="text-center text-[25px] font-semibold">
                Open Hours
              </p>
              <span className="flex justify-center pt-[12px] pb-[24px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="318"
                  height="24"
                  viewBox="0 0 318 24"
                  fill="none"
                >
                  <path
                    d="M0.452994 12.4258L12 23.9728L23.547 12.4258L12 0.878776L0.452994 12.4258ZM317.547 12.4258L306 0.878776L294.453 12.4258L306 23.9728L317.547 12.4258ZM12 14.4258H306V10.4258H12V14.4258Z"
                    fill="#C7A43C"
                  />
                </svg>
              </span>
              <p className="text-center text-lg font-medium">
                Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am ~
                6:00pm <br /> Sun.
                <br /> 11:00am ~ 5:00pm
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

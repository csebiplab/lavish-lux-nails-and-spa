"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import gokundo from "../../../../public/assets/footer/Gokundu-logo(white and green) 1.png";

import { FaPhoneVolume } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import bgImg from "../../../../../public/assets/footer/footerbg.png";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./footer.css";



const Footer = () => {
  return (
    <footer className="">
      <div className="hidden md:block custom-container footer__bg bg-blend-multiply px-[6px] lg:px-9  !text-white relative">
        

        {/* company logo */}
        <div className="absolute lg:-top-20 -top-10 left-1/2 lg:-ml-[90px] -ml-[50px] lg:w-auto lg:h-auto w-[100px] h-[100px]  ">
          {/* <Image src={companyLogo} height={182} width={182} alt="company" /> */}
        </div>

        <div className="container">
          <div className="z-100 2xl:pt-[180px] lg:pt-[160px] pt-[80px] 2xl:pb-[65px] pb-[50px] text-white ">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
                
                

                <div className=" lg:col-span-3 md:col-span-1 grid sm:grid-cols-7 grid-cols-1  gap-3">
                  {/* Navigation line */}
                  <div className="sm:col-span-3  ">
                    <p className="font-semibold text-white lg:text-xl text-lg  lg:mb-7 md:mb-5 mb-3 ">
                    Navigation
                    </p>
                    <ul className="">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link text-base   items-center text-white"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px]">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center  text-white"
                        >
                          Testimonial
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-[16px] text-[8px]  items-center text-white"
                        >
                          Sitemap
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Ours Services line */}
                  <div className="sm:col-span-4  ">
                    <p className="font-semibold text-white  lg:text-xl  text-lg lg:mb-7 md:mb-5 mb-3 ">
                      {" "}
                      Ours Services
                    </p>
                    <ul className=" ">
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link text-base  items-center text-white"
                        >
                          Manicure
                        </Link>
                      </li>
                      <li className=" lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Pedicure
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Waxing
                        </Link>
                      </li>
                      <li className="lg:py-8 xs:py-[12px] ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white "
                        >
                          Design
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Artificial Nails
                        </Link>
                      </li>
                      <li className=" ">
                        <Link
                          href="#"
                          className="footer-link lg:text-base text-[8px]  items-center text-white"
                        >
                          Additional Services
                        </Link>
                      </li>
                    </ul>
                  </div>


                </div>

                <div className=" lg:col-span-2 md:col-span-1 items-center">
                  <div className="sm:col-span-3  items-center">
                      <p className="font-semibold text-white lg:text-xl text-lg lg:mb-7 md:mb-5 mb-3">
                        Contact Us
                      </p>
                      <ul className=" ">
                        <li>
                          <a
                            href="https://maps.app.goo.gl/rh3dXrHssMQMsNH27"
                            className="footer-link flex gap-4 items-center text-base text-white"
                            target="_blank"
                          >
                            <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" />{" "}
                            1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada
                          </a>
                        </li>
                        <li className="py-2 lg:py-4">
                          <a
                            href="tel:(905) 973-6669"
                            className="footer-link items-center text-base text-white"
                          >
                            <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" />{" "}
                            (905) 973-6669
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:manager@lavishluxnailsandspa.com"
                            className="footer-link items-center text-white max-w-full"
                          >
                            <Image
                              src="/assets/icons/email.png"
                              width={21}
                              height={21}
                              className="w-[21 px] h-[21px]"
                              alt="mail"
                            />
                            {/* <span className="text-sm line-clamp-1"> */}
                            <span className="text-base">
                            manager@lavishluxnailsandspa.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>


                </div>

                <div className=" lg:col-span-2 md:col-span-1 items-center">
                  {/* contact line  */}
                  <div className="sm:col-span-3  items-center">
                    <p className="lg:text-xl text-base">Open Hours:</p>
                    <p className="my-1 mt-2 lg:mt-5">
                      Mon - Fri: 07 am - 07 pm, <br /> Sunday: CLOSED
                    </p>

                    <div>
                    </div>
                  </div>
                </div>


              </div>

              {/* terms */}
              <div className="lg:hidden block py-8">
                <div className="flex justify-center items-center text-center">
                  <div className=" ">
                    <div>
                      <p className="text-xs lg:text-sm 5xl:text-base">
                        {" "}
                        © All Copyright 2024 by Lavish Lux Nail Spa
                      </p>
                    </div>
                    <div className="flex gap-5 justify-center items-center text-center">
                      <p className="text-xs lg:text-sm 5xl:text-base">Terms & Condition </p>
                      <p className="text-xs lg:text-sm 5xl:text-base">Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* creater company credit */}
      <div className="hidden md:block">
        <div className="footer-bottom-bg container grid lg:grid-cols-8 gap-5 lg:py-6 xs:py-2   items-center  md:mx-auto text-center ">
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-normal gap-2  ">
            <p className="text-xs lg:text-sm 5xl:text-base text-white ">
              {" "}
              <b className="">
              WEBSITE DESIGN AND SEO BY :-
              </b>{" "}
            </p>
            <Image
              src="/assets/images/goKundu.png"
              alt="gokundo"
              width={141}
              height={36}
              className="ml-2 "
            />
          </div>
          <div className="lg:col-span-3 lg:block hidden">
            <p className="text-xs lg:text-sm 5xl:text-base text-white">
            © All Copyright 2024 by Lavish Lux Nail Spa
            </p>
          </div>
          <div className="lg:col-span-2 lg:block hidden">
            <ul className="text-xs lg:text-sm 5xl:text-base flex justify-evenly  ">
              <li className="text-white">Terms & Condition </li>
              <li className="text-white">Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>



      {/* small device  */}
      <div className="block md:hidden">
        <div className="small_footer_image ">
            {/* first div  */}
            <div className="pt-[37px]">
                <Image src="/assets/images/footer_logo.png" alt="footer logo icon" width={228} height={65} className="w-[228px] h-[65px] mx-auto"/>
                <p className="text-center pt-[15px] text-lg font-semibold px-[30px]">Find the best nail salon in Mississauga for impeccable manicures & pedicures. Expert service & stunning results await! Book now.</p>
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
                <li className="py-[22px] text-lg font-medium"><Link  className="text-white" href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada">1100 Burnhamthorpe Rd W Unit 16, <br/> Mississauga, ON L5C 4G4, Canada</Link></li>
                <li className="text-lg font-medium"><Link className="text-white" href="tel : (905) 973-6669">(905) 973-6669</Link></li>
                <li className="pt-[20px] text-lg font-medium"><Link className="text-white" href="mail : manager@lavishluxnailsandspa.com">manager@lavishluxnailsandspa.com</Link></li>
              </ul>
            </div>
            {/* fourth div  */}
            <div className="pt-[30px] ">
              <div className="border-4 border-primary rounded-lg pt-[17px] pb-[23px] mx-[30px]">
              <p className="text-center text-[25px] font-semibold">Open Hours</p>
              <span className="flex justify-center pt-[12px] pb-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="318" height="24" viewBox="0 0 318 24" fill="none">
                <path d="M0.452994 12.4258L12 23.9728L23.547 12.4258L12 0.878776L0.452994 12.4258ZM317.547 12.4258L306 0.878776L294.453 12.4258L306 23.9728L317.547 12.4258ZM12 14.4258H306V10.4258H12V14.4258Z" fill="#C7A43C"/>
              </svg>
              </span>
              <p className="text-center text-lg font-medium">Mon. ~ Fri. <br/> 10:00am ~ 7:00pm <br/> Sat. <br/> 9:00am ~ 6:00pm <br/> Sun.<br/> 11:00am ~ 5:00pm</p>
              </div>
              
            </div>
              {/* fifth div  */}
            <div className="pt-[50px]">
              <div className="border border-white  mx-[30px]"/>
              <p className="text-base font-medium pb-[15px] text-white text-center pt-[20px]">© All Copyright 2024 by Lavish Lux Nail & Spa</p>
              <div className="flex justify-evenly">
                <p className="text-base font-medium text-white">Terms & Condition</p>
                <p className="text-base font-medium text-white">Privacy Policy</p>
              </div>
            </div>
            {/* footer bottom  */}
            <div className="flex items-center justify-around pt-[21px] pb-[19px] bg-primary mt-[44px]">
              <p className="text-xs font-semibold text-whtie">WEBSITE DESIGN AND SEO BY :-</p>
              <Image src="/assets/images/goKundu__fb.png" alt="company logo" width={112} height={28}/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

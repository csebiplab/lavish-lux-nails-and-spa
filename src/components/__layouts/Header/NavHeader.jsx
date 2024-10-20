"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./NavHeader.css";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 xl:mt-0 xl:mb-0 xl:flex-row items-center border-0 outline-none">
      <Typography
        as={Link}
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          <Link href="#about">About</Link>
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/services"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          <Link href="#service">Services</Link>
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/book-now"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          <Link href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true">
            Book Now
          </Link>
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/gallery"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          <Link href="#gallery">Gallery</Link>
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          <Link href="#contact">Contact Us</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavHeader() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <header className="sticky top-0 z-[500000]">
        {/* large device  start*/}

        <div className="custom-container">
          <div className="hidden xl:block main__header py-[6px] 5xl:py-[10px]">
            <div className="w-full flex justify-between items-center gap-[40px]">
              {/* first div  */}
              <div className="w-full">
                <p className="full__section_l_p pb-[4px] 5xl:pb-[5px] flex items-center gap-[4px] text-secondary text-sm 5xl:text-base font-medium">
                  {" "}
                  <FaCanadianMapleLeaf className="w-[27px] h-[22px]" />
                  Best Nail Salon in Mississauga
                </p>
                <div className="w-full h-[2px] bg-primary" />
                <ul className="full__section_l_p pt-[5px] 5xl:pt-[7px] flex items-center gap-[30px] 2xl:gap-[40px] 5xl:gap-[50px]">
                  <Link href="#about">
                    <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                      About
                    </li>
                  </Link>
                  <Link href="#service">
                    <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                      Services
                    </li>
                  </Link>
                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                  >
                    <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                      Book Now
                    </li>
                  </Link>
                </ul>
              </div>
              {/* second div  */}
              <div className="w-1/2 5xl:w-1/3">
                <Link href="/">
                  <Image
                    src="/assets/images/nav_logo.png"
                    width={347}
                    height={98}
                    alt="nav logo"
                    className="w-full"
                  />
                </Link>
              </div>
              {/* third div  */}
              <div className="w-full">
                <div className="full__section_r_p pb-[6px] 5xl:pb-[8px] flex justify-end gap-[12px] 2xl:gap-[14px] 5xl:gap-[16px]">
                  <p className="text-sm font-semibold text-secondary ">
                    Follow Us:
                  </p>
                  <div className="flex  gap-[30px]">
                    <Link
                      rel="nofollow"
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61559301724341"
                    >
                      <FaFacebook className="h-[22px] w-[22px] text-secondary" />
                    </Link>

                    <Link
                      rel="nofollow"
                      target="_blank"
                      href="https://www.tiktok.com/@lavishluxnailsspa"
                    >
                      <AiFillTikTok className="h-[22px] w-[22px] text-secondary" />
                    </Link>

                    <Link
                      rel="nofollow"
                      target="_blank"
                      href="https://www.instagram.com/lavishluxnailspa_sauga/"
                    >
                      <FaInstagram className="h-[22px] w-[22px] text-secondary" />
                    </Link>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-primary" />
                <div className="full__section_r_p pt-[5px] 5xl:pt-[7px] flex items-center justify-end gap-[20px] 5xl:gap-[30px]">
                  <ul className="flex items-center gap-[30px] 2xl:gap-[40px] 5xl:gap-[50px]">
                    <Link href="#gallery">
                      <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                        Gallery
                      </li>
                    </Link>
                    <Link href="#contact">
                      <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                        Contact Us
                      </li>
                    </Link>
                  </ul>
                  <div className="-mt-[2px]">
                    <Link
                      href="tel:(905) 973-6669"
                      rel="nofollow"
                      target="_blank"
                    >
                      <button className="bg-secondary hover:bg-primary text-base 5xl:text-lg font-semibold text-white py-[4px] px-[8px] flex items-center gap-[2px] clip-path-custom">
                        <Image
                          src="/assets/lavish/icons/nav_phone.png"
                          alt="book now"
                          width={24}
                          height={24}
                          className="w-[24px] h-[20px]"
                        />
                        <span>(905) 973-6669</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large device  end*/}

        {/* 1024px medium device start  */}

        <div className=" hidden lg:block xl:hidden">
          <div
            id="hideOnScroll"
            className={`container block xl:hidden bg-white ${
              hideOnScroll ? "hidden" : ""
            }`}
          >
            {/* first div  */}
            <div className="flex justify-between items-center pt-1">
              <div className="flex justify-center items-center gap-[5px]">
                <Image
                  src="/assets/images/canada.png"
                  width={19}
                  height={19}
                  alt="canada logo"
                  className="h-[19px] w-[19px]"
                />
                <p className="text-secondary text-sm font-medium text-center">
                  Best Nail Salon in Mississauga
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-secondary ">
                  Follow Us:
                </p>
                <div className="flex  gap-[30px]">
                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61559301724341"
                  >
                    <FaFacebook className="h-[20px] w-[20px] text-secondary" />
                  </Link>

                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.tiktok.com/@lavishluxnailsspa"
                  >
                    <AiFillTikTok className="h-[20px] w-[20px] text-secondary" />
                  </Link>

                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.instagram.com/lavishluxnailspa_sauga/"
                  >
                    <FaInstagram className="h-[20px] w-[20px] text-secondary" />
                  </Link>
                </div>
              </div>
              {/* <div className="block xl:hidden">
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="xl:hidden"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
                      src="/assets/images/menu.png"
                      width={33}
                      height={33}
                      alt="Menu"
                      className="w-[33px] h-[23px] "
                    />
                  )}
                </IconButton>
              </div> */}
            </div>
          </div>

          {/* center div  */}
          <div
            id="hideOnScroll"
            className={`block xl:hidden bg-white flex justify-center items-center gap-20 pt-2 pb-1 ${
              hideOnScroll ? "hidden" : ""
            }`}
          >
            <div className="w-full h-[2px] bg-primary" />
            {/* <div className="w-full h-[2px] bg-primary"/> */}
          </div>

          {/* second div  */}
          <div className=" container w-full bg-white flex justify-between items-center">
            {/* button  */}
            <div className="w-full flex justify-between items-center gap-[15px]">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <button className="bg-secondary hover:bg-primary text-sm font-semibold text-white leading-normal py-[7px] px-[34px] flex items-center gap-[6px] clip-path-custom">
                  <span className="flex items-center gap-[7px]">
                    Book Now{" "}
                    <svg
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
                  </span>
                </button>
              </Link>
              <div className="py-1">
                <Image
                  src="/assets/images/nav_sm_logo.png"
                  width={214}
                  height={61}
                  alt="brand logo"
                  className="h-[61px] w-[214px]"
                />
              </div>
              <Link href="tel:(905) 973-6669" rel="nofollow" target="_blank">
                <button className="bg-secondary hover:bg-primary text-sm font-semibold leading-normal text-white py-[7px] px-[10px] flex items-center gap-[5px] clip-path-custom">
                  <Image
                    src="/assets/lavish/icons/nav_phone.png"
                    alt="book now"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px]"
                  />
                  <span>(905) 973-6669</span>
                </button>
              </Link>
              <div
                id="hideOnScroll"
                className={`block xl:hidden bg-white ${
                  hideOnScroll ? "" : "hidden"
                }`}
              >
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="xl:hidden"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
                      src="/assets/images/menu.png"
                      width={33}
                      height={33}
                      alt="Menu"
                      className="w-[33px] h-[23px] "
                    />
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* 1024px medium device end  */}

        {/* small device start  */}

        <div className="block lg:hidden">
          <div
            id="hideOnScroll"
            className={`block md:hidden pt-1 bg-white ${
              hideOnScroll ? "hidden" : ""
            }`}
          >
            <div className="flex justify-center items-center gap-[5px]">
              <Image
                src="/assets/images/canada.png"
                width={19}
                height={19}
                alt="canada logo"
                className="h-[19px] w-[19px]"
              />
              <p className="text-secondary text-sm font-medium text-center">
                Best Nail Salon in Mississauga
              </p>
            </div>
          </div>

          <div className="w-full bg-white flex justify-between items-center px-[15px] py-[15px]">
            {/* button  */}
            <div className="flex items-center gap-[15px]">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <button className="bg-secondary hover:bg-primary text-sm font-semibold text-white leading-normal py-[7px] px-[34px] flex items-center gap-[6px] clip-path-custom">
                  <span>Book Now</span>
                </button>
              </Link>
              <Link href="tel:(905) 973-6669" rel="nofollow" target="_blank">
                <button className="bg-secondary hover:bg-primary text-sm font-semibold leading-normal text-white py-[7px] px-[10px] flex items-center gap-[5px] clip-path-custom">
                  <Image
                    src="/assets/lavish/icons/nav_phone.png"
                    alt="book now"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px]"
                  />
                  <span>(905) 973-6669</span>
                </button>
              </Link>
            </div>
            <div className="block md:hidden">
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Image
                    src="/assets/images/menu.png"
                    width={24}
                    height={24}
                    alt="Menu"
                    className="w-[24px] h-[24px]"
                  />
                )}
              </IconButton>
            </div>
          </div>

          <div
            id="hideOnScroll"
            className={`block md:hidden pt-1 bg-white ${
              hideOnScroll ? "hidden" : ""
            }`}
          >
            <div className="w-full flex justify-center items-center pb-3 px-3">
              <Image
                src="/assets/images/nav_sm_logo.png"
                width={214}
                height={61}
                alt="brand logo"
                className="h-[61px] w-[214px]"
              />
            </div>
          </div>
        </div>

        {/* small device end  */}
      </header>

      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="paragraph" color="blue-gray">
            Lavish Lux
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <NavList />
      </Drawer>
    </>
  );
}

"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./NavHeader.css";


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row items-center border-0 outline-none">
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
          <Link href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true">Book Now</Link>
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
            <div className="flex justify-between items-center gap-[60px]">
              {/* first div  */}
              <div>
                <p className="full__section_l_p pb-[6px] 5xl:pb-[8px] flex items-center gap-[10px] text-secondary text-sm 5xl:text-base font-medium">
                  {" "}
                  <Image
                    src="/assets/images/canada.png"
                    alt="canada icon"
                    width={27}
                    height={32}
                  />{" "}
                  Best Nail Salon in Mississauga
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="auto"
                  height="18"
                  viewBox="0 0 709 18"
                  fill="none"
                  className="w-[400px] 3xl:w-[500px] 5xl:w-[700px]"
                >
                  <path
                    d="M708.572 9L699.912 0.339746L691.252 9L699.912 17.6603L708.572 9ZM-0.0878906 10.5H699.912V7.5H-0.0878906V10.5Z"
                    fill="#C7A43C"
                  />
                </svg>
                <ul className="full__section_l_p pt-[20px] 5xl:pt-[25px] flex items-center gap-[30px] 2xl:gap-[40px] 5xl:gap-[50px]">
                  <Link href="#about"><li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">About</li></Link>
                  <Link href="#service"><li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">Services</li></Link>
                  <Link rel="nofollow" target="_blank" href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"><li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">Book Now</li></Link>
                  
                </ul>
              </div>
              {/* second div  */}
              <div>
                <Image
                  src="/assets/images/nav_logo.png"
                  width={347}
                  height={98}
                  alt="nav logo"
                  className="w-[340px] 5xl:w-[347px] h-[90px] 5xl:h-[98px]"
                />
              </div>
              {/* third div  */}
              <div>
                <div className="full__section_r_p pb-[9px] 5xl:pb-[12px] flex items-center gap-[12px] 2xl:gap-[14px] 5xl:gap-[16px]">
                  <p className="text-sm font-semibold text-secondary">
                    Follow Us:
                  </p>
                  <div className="flex items-center gap-[30px]">
                    <Image
                      src="/assets/images/f.png"
                      alt="facebook icon"
                      width={26}
                      height={26}
                    />
                    <Image
                      src="/assets/images/x.png"
                      alt="x icon"
                      width={26}
                      height={26}
                    />
                    <Image
                      src="/assets/images/i.png"
                      alt="instragram icon"
                      width={26}
                      height={26}
                    />
                    <Image
                      src="/assets/images/l.png"
                      alt="linkedin icon"
                      width={26}
                      height={26}
                    />
                    <Image
                      src="/assets/images/g.png"
                      alt="google icon"
                      width={26}
                      height={26}
                    />
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="auto"
                  height="18"
                  viewBox="0 0 709 18"
                  fill="none"
                >
                  <path
                    d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM9 10.5H709V7.5H9V10.5Z"
                    fill="#C7A43C"
                  />
                </svg>
                <div className="full__section_r_p pt-[8px] 5xl:pt-[10px] flex items-center justify-between gap-[30px] 5xl:gap-[40px]">
                  <ul className="flex items-center gap-[30px] 2xl:gap-[40px] 5xl:gap-[50px]">
                    <Link href="#gallery">
                    <li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                      Gallery
                    </li>
                    </Link>
                    <Link href="#contact"><li className="text-sm 2xl:text-base 5xl:text-lg font-semibold text-black">
                      Contact Us
                    </li></Link>
                  </ul>
                  <div>
                    {/* <button className="flex items-center gap-[7px] bg-secondary p-[12px] text-white rounded-lg">
                      <Image
                        src="/assets/images/phone.png"
                        alt="phone icon"
                        width={23}
                        height={23}
                      />
                      (905) 973-6669
                    </button> */}
                    <Link
                      href="tel:(905) 973-6669"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="/assets/buttons/large_d_p_b.png"
                        alt="book now"
                        width={205}
                        height={50}
                        className="w-[180px] 5xl:w-[205px] h-[50px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large device  end*/}

        {/* small device start  */}

        <div className="block xl:hidden">
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
            {/* <div className="block md:hidden">
              <Link
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                rel="nofollow"
                target="_blank"
                className="!no-underline"
              >
                <Button className="text-black px-[20px] py-[9px] nav__btn">
                  <span className="text-white text-sm font-semibold">
                    Book Now
                  </span>
                </Button>
              </Link>
            </div>

            <div className="block md:hidden">
              <a href="tel:(905) 973-6669" className="!no-underline">
                <Button className="text-white px-[11px] py-[9px] nav__btn flex items-center gap-[5px]">
                  <Image
                    src="/assets/images/phone_icon.png"
                    alt="phone icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-white text-sm font-semibold">
                    (905) 973-6669
                  </span>
                </Button>
              </a>
            </div> */}

            {/* button  */}
            <div className="flex items-center gap-[15px]">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <Image
                  src="/assets/buttons/book_now.png"
                  alt="book now"
                  width={145}
                  height={32}
                />
              </Link>
              <Link href="tel:(905) 973-6669" rel="nofollow" target="_blank">
                <Image
                  src="/assets/buttons/phone_number.png"
                  alt="book now"
                  width={145}
                  height={32}
                />
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

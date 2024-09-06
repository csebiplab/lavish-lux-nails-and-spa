"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import UpperNavbar from "./UpperNav";
import "./NavHeader.css";

// our services nav menu
const our_service_menu_items = {
  // interior: [
  //   {
  //     title: "Cleaning Services in Richmond",
  //     route: "/cleaning-services-in-richmond",
  //   },
  //   {
  //     title: "House Cleaning Services in Katy TX",
  //     route: "/house-cleaning-services-in-katy-tx",
  //   },
  // ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div className="font-medium text-lg">
            <ListItem
              className="flex justify-center items-center gap-2 rounded-full py-1  pr-4 font-bold  text-lg    text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <p className="mb-1 text-primary font-semibold">Interior</p>
              <ul>{renderItems(our_service_menu_items.interior)}</ul>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <p className="text-primary mb-1 font-semibold">Interior</p>
          <ul>{renderItems(our_service_menu_items.interior)}</ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

// our services nav list end

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
          About
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
          Services
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
          Book Now
        </ListItem>
      </Typography>

      {/* <div className="mt-[6px]">
        <OurServiceManu />
      </div> */}

      <Typography
        as={Link}
        href="/gallery"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-lg text-black"
      >
        <ListItem className="flex items-center text-lg text-dark-100 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Gallery
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
          Contact Us
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
      <UpperNavbar />
      <header className="sticky top-0 z-[500000]">
        <div className="custom-container main__header">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/">
                <Image
                  src="/assets/images/nav_logo.png"
                  width={217}
                  height={103}
                  alt="brand logo"
                  className="w-full h-full lg:w-[217px] hidden md:block"
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>

              <div className="flex ">
                <div className="hidden md:flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/images/phone-call.png"
                        width={24}
                        height={24}
                        alt="Phone"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="">
                        <span className="text-base block">Quick Contact</span>
                        <a
                          href="tel:(832) 820-4035"
                          className="text-primary font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
                        >
                          (832) 820-4035
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Navbar>
        </div>
            
        {/* small device start  */}

        <div className="block md:hidden">
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
          <p className="text-secondary text-sm font-medium text-center">Best Nail Salon in Mississauga</p>
          </div>
          
        </div>

        <div className="w-full bg-white flex justify-between items-center px-[30px] py-[15px]">
          <div className="block md:hidden">
            <Link href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true" rel="nofollow" target="_blank" className="!no-underline">
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

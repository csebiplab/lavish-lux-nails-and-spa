"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  "/assets/lavish/gallery/gallery1.png",
  "/assets/lavish/gallery/gallery2.png",
  "/assets/lavish/gallery/gallery3.png",
  "/assets/lavish/gallery/gallery4.png",
  "/assets/lavish/gallery/gallery5.png",
  "/assets/lavish/gallery/gallery6.png",
  "/assets/lavish/gallery/gallery7.png",
  "/assets/lavish/gallery/gallery8.png",
  "/assets/lavish/gallery/gallery9.png",
  "/assets/lavish/gallery/gallery10.png",
  "/assets/lavish/gallery/gallery11.png",
];


const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [loadMore, setLoadMore] = useState(true);

  const loadMoreImages = () => {
    setVisibleImages(galleryImages.length);
  };

  return (
    <div id="gallery">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.gallery__headingIconText} />
      </div>
      {/* large device  */}
      <div className="hidden xl:block pt-[25px]">
        <div>
          {/* first div  */}
          <div className="grid grid-cols-4 gap-[14px]">
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/gallery1.png"
                alt="gallery image"
                width={470}
                height={491}
                className="w-full"
              />
            </div>
            <div className="col-span-1 ">
              <Image
                src="/assets/lavish/gallery/gallery2.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery5.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/gallery3.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery6.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/gallery4.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery7.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[14px]"
              />
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className=" flex -mt-3">
          <Image
            src="/assets/lavish/gallery/gallery8.png"
            alt="gallery image"
            width={469}
            height={238}
            className="w-full"
          />
          <Image
            src="/assets/lavish/gallery/gallery9.png"
            alt="gallery image"
            width={469}
            height={238}
            className="w-full"
          />
          <Image
            src="/assets/lavish/gallery/gallery10.png"
            alt="gallery image"
            width={469}
            height={238}
            className="w-full"
          />
          <Image
            src="/assets/lavish/gallery/gallery11.png"
            alt="gallery image"
            width={469}
            height={238}
            className="w-full"
          />
        </div>

        {/* button  */}
        <div className="flex justify-center items-center pt-[25px] 5xl:pt-[35px]">
        <button className="bg-secondary hover:bg-primary text-base font-semibold text-white py-[16px] px-[32px] flex items-center space-x-3 clip-path-custom">
        <span>Book Now</span>
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
      </button>
          {/* <button
            onMouseEnter={() => setLoadMore(false)}
            onMouseLeave={() => setLoadMore(true)}
          >
            {loadMore ? (
              <Image
                src="/assets/button/load_deault.jpg"
                alt="book now"
                width={200}
                height={50}
              />
            ) : (
              <Image
                src="/assets/button/load_hover.jpg"
                alt="book now"
                width={200}
                height={50}
              />
            )}
          </button> */}
          
        </div>
      </div>


      {/* Small device */}
      <div className="block md:hidden container">
        <div className="pt-[25px]">
          {galleryImages.slice(0, visibleImages).map((img, index) => (
            <div key={index} className="pt-[15px]">
              <Image
                src={img}
                alt="gallery image"
                width={370}
                height={275}
                className="w-full h-[275px]"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < galleryImages.length && (
          <div className="pt-[15px] flex justify-center">
            {/* <button onClick={loadMoreImages}>
              <Image
                src="/assets/buttons/load_more_sm.png"
                alt="book now"
                width={129}
                height={32}
              />
            </button> */}
            <button
              onClick={loadMoreImages}
              onMouseEnter={() => setLoadMore(false)}
              onMouseLeave={() => setLoadMore(true)}
            >
              {loadMore ? (
                <Image
                  src="/assets/button/load_deault.jpg"
                  alt="book now"
                  width={200}
                  height={50}
                />
              ) : (
                <Image
                  src="/assets/button/load_hover.jpg"
                  alt="book now"
                  width={200}
                  height={50}
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

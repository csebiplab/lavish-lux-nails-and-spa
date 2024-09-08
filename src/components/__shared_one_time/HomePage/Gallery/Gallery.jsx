"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const galleryImages = [
  "/assets/gallery/gallery1.png",
  "/assets/gallery/gallery2.png",
  "/assets/gallery/gallery3.png",
  "/assets/gallery/gallery4.png",
  "/assets/gallery/gallery5.png",
  "/assets/gallery/gallery6.png",
  "/assets/gallery/gallery7.png",
  "/assets/gallery/gallery8.png",
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(4);

  const loadMoreImages = () => {
    setVisibleImages(galleryImages.length);
  };

  return (
    <div id="gallery">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.gallery__headingIconText} />
      </div>
      {/* large device  */}
      <div className="hidden 5xl:block pt-[25px]">
        <div>
          {/* first div  */}
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="col-span-1">
              <Image
                src="/assets/gallery/gallery11.png"
                alt="gallery image"
                width={545}
                height={660}
                className="w-full h-[656px] "
              />
            </div>
            <div className="col-span-1 pt-3">
              <Image
                src="/assets/gallery/gallery10.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
              <Image
                src="/assets/gallery/gallery7.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
            </div>
            <div className="col-span-1 pt-3">
              <Image
                src="/assets/gallery/gallery8.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
              <Image
                src="/assets/gallery/gallery5.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
            </div>
            <div className="col-span-1 pt-3">
              <Image
                src="/assets/gallery/gallery9.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
              <Image
                src="/assets/gallery/gallery6.png"
                alt="gallery image"
                width={438}
                height={326}
                className="w-full h-[326px] pb-[20px]"
              />
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className="flex -mt-3">
          <Image
            src="/assets/gallery/gallery1.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery2.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery3.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery4.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[480px] h-[326px]"
          />
        </div>
        {/* button  */}
        <div className="flex justify-center items-center pt-[35px] pb-[38px]">
          {/* <Link href="/" rel="nofollow" target="_blank">
            <button
              type="submit"
              className="flex items-center gap-[15px] text-base font-semibold text-white bg-secondary py-[6px] px-[17px] rounded-lg"
            >
              Load More
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="22"
                viewBox="0 0 35 22"
                fill="none"
              >
                <path
                  d="M34.2992 10.625C29.6121 10.625 25.8125 15.382 25.8125 21.25"
                  stroke="white"
                />
                <path d="M0.351562 10.625H34.2985" stroke="white" />
                <path
                  d="M25.8125 0C25.8125 5.868 29.6121 10.6249 34.2992 10.625"
                  stroke="white"
                />
              </svg>
            </button>
          </Link> */}
          <button
            >
              <Image
                src="/assets/buttons/large_d_gallery.png"
                alt="book now"
                width={200}
                height={50}
              />
            </button>
          
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
            {/* <button
              onClick={loadMoreImages}
              className="flex items-center gap-[5px] bg-secondary text-white py-2 px-4 rounded-[10px]"
            >
              Load More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
              >
                <path
                  d="M21.1984 6.81641C18.2713 6.81641 15.8984 9.78252 15.8984 13.4414"
                  stroke="white"
                />
                <path d="M0 6.81641H21.2" stroke="white" />
                <path
                  d="M15.8984 0.191406C15.8984 3.85028 18.2713 6.81635 21.1984 6.81641"
                  stroke="white"
                />
              </svg>
            </button> */}
            <button
            onClick={loadMoreImages}
            >
              <Image
                src="/assets/buttons/load_more_sm.png"
                alt="book now"
                width={129}
                height={32}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
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
    <div className="">
      
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.gallery__headingIconText} />
      </div>
      {/* large device  */}
      <div className="hidden 5xl:block pt-[25px]">
          <div>
            {/* first div  */}
            <div className="grid grid-cols-3 gap-[27px]">
                <div className="col-span-1">
                    <Image src="/assets/gallery/gallery7.png" alt="gallery image" width={717} height={880} className="w-full h-[880px] "/>
                </div>
                <div className="col-span-1">
                <Image src="/assets/gallery/gallery1.png" alt="gallery image" width={575} height={427} className="w-full h-[427px] pb-[26px] pt-3"/>
                <Image src="/assets/gallery/gallery2.png" alt="gallery image" width={575} height={427} className="w-full h-[427px]"/>
                </div>
                <div className="col-span-1">
                <Image src="/assets/gallery/gallery3.png" alt="gallery image" width={575} height={427} className="w-full h-[427px] pb-[26px] pt-3"/>
                <Image src="/assets/gallery/gallery4.png" alt="gallery image" width={575} height={427} className="w-full h-[427px]"/>
                </div>
            </div>
          </div>
          {/* second div  */}
          <div className="flex gap-[27px]">
          <Image src="/assets/gallery/gallery6.png" alt="gallery image" width={485} height={494} className="w-[485px] h-[494px]"/>
          <Image src="/assets/gallery/gallery8.png" alt="gallery image" width={832} height={494} className="w-[832] h-[494]"/>
          <Image src="/assets/gallery/gallery5.png" alt="gallery image" width={551} height={494} className="w-[551] h-[494]"/>
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
          <button
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
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Gallery;

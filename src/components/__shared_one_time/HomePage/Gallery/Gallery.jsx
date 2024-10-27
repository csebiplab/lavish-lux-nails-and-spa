"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React, { useState } from "react";
import "./Gallery.css";

const galleryImages = [
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
  "/assets/lavish/gallery/firstGallery.png",
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [loadImage, setLoadImage] = useState(false);

  const loadMoreImages = () => {
    setVisibleImages(galleryImages.length);
  };

  return (
    <div id="gallery">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.gallery__headingIconText} />
      </div>
      {/* large device  */}
      <div data-aos="fade-up" className="hidden md:block pt-[25px]">
        <div>
          {/* first div  */}
          <div className="grid grid-cols-4 gap-[14px]">
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/firstGallery.png"
                alt="gallery image"
                width={469}
                height={496}
                className="w-full "
              />
            </div>
            <div className="col-span-1 ">
              <Image
                src="/assets/lavish/gallery/gallery2.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery5.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/gallery3.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery6.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/lavish/gallery/gallery4.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
              <Image
                src="/assets/lavish/gallery/gallery7.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full pb-[15px]"
              />
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className="flex gap-[14px]">
          <Image
            src="/assets/lavish/gallery/gallery8.png"
            alt="gallery image"
            width={464}
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
        {/* third div  */}
        {loadImage && (
          <div className="w-full">
            <div className="flex gap-[14px] pt-[15px]">
              <Image
                src="/assets/lavish/gallery/gallery12.png"
                alt="gallery image"
                width={464}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery13.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery14.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery15.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
            </div>
            {/* second div */}
            <div className="flex gap-[14px] pt-[15px]">
              <Image
                src="/assets/lavish/gallery/gallery16.png"
                alt="gallery image"
                width={464}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery17.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery18.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
              <Image
                src="/assets/lavish/gallery/gallery19.png"
                alt="gallery image"
                width={469}
                height={238}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* button  */}
        <div className="flex justify-center items-center pt-[25px] 5xl:pt-[35px]">
          <button
            onClick={() => setLoadImage(!loadImage)}

            className={`bg-secondary hover:bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex items-center space-x-3 clip-path-custom ${loadImage && "hidden"}`}
          >
            <span>Load More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="22"
              viewBox="0 0 35 22"
              fill="none"
            >
              <path
                d="M34.7485 11.0078C30.0614 11.0078 26.2617 15.7648 26.2617 21.6328"
                stroke="white"
              />
              <path d="M0.800781 11.0078H34.7477" stroke="white" />
              <path
                d="M26.2617 0.382812C26.2617 6.25081 30.0614 11.0077 34.7485 11.0078"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Small device */}
      <div className="block md:hidden container">
        <div className="pt-[25px]">
          {galleryImages.slice(0, visibleImages).map((img, index) => (
            <div key={index} className="pb-[12px] sm:pb-[15px]">
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
        {visibleImages < galleryImages?.length && (
          <div className="pt-[15px] flex justify-center">
            <button
              onClick={loadMoreImages}
              className="bg-secondary hover:bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex items-center space-x-3 clip-path-custom"
            >
              <span>Load More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="22"
                viewBox="0 0 35 22"
                fill="none"
              >
                <path
                  d="M34.7485 11.0078C30.0614 11.0078 26.2617 15.7648 26.2617 21.6328"
                  stroke="white"
                />
                <path d="M0.800781 11.0078H34.7477" stroke="white" />
                <path
                  d="M26.2617 0.382812C26.2617 6.25081 30.0614 11.0077 34.7485 11.0078"
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

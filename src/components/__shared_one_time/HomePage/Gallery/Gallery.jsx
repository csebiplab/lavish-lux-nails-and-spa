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
            className="w-[270px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px] 3xl:w-[440px] 4xl:w-[460px] 5xl:w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery2.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[270px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px] 3xl:w-[440px] 4xl:w-[460px] 5xl:w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery3.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[270px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px] 3xl:w-[440px] 4xl:w-[460px] 5xl:w-[480px] h-[326px]"
          />
          <Image
            src="/assets/gallery/gallery4.png"
            alt="gallery image"
            width={464}
            height={326}
            className="w-[270px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px] 3xl:w-[440px] 4xl:w-[460px] 5xl:w-[480px] h-[326px]"
          />
        </div>
        {/* button  */}
        <div className="flex justify-center items-center pt-[35px] pb-[38px]">
          <button
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

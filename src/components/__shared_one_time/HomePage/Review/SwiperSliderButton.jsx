"use client";

import Image from "next/image";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <>
        <div className="flex items-center justify-center pt-[35px] pb-[54px] 5xl:pb-[120px]">
          <Image src="/assets/images/left_arrow_swipper.png" alt="left arrow" width={80} height={42}/>
          <Image src="/assets/images/right_arrow_swipper.png" alt="right arrow" width={80} height={42}/>
        </div>
      </>
    </div>
  );
};

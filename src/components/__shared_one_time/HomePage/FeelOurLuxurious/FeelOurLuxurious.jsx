import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const images = [
    "/assets/images/fol2.png",
    "/assets/images/fol3.png",
    "/assets/images/fol4.png",
    "/assets/images/fol5.png",
]

const FeelOurLuxurious = () => {
    return (
        <div>
            <div className="flex justify-center items-center pb-[25px]">
                <HeadingIcon text={headingIconText.feelOurLuxurious__headingIconText}/>
            </div>
            <div>
                <Image src="/assets/images/fol1.png" alt="FeelOurLuxurious image" width={432} height={287} className="w-[432px] md:w-[1020px] xl:w-full h-[287px] md:h-[506px] xl:h-[838px]"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-[30px] xl:gap-[40px] px-[100px] xl:px-[120px] mt-[12px] md:-mt-[70px]">
                {
                    images?.map((img, index)=>{
                        return <div key={index}>
                            <Image src={img} alt="FeelOurLuxurious image" width={222} height={287} className="w-[221px] md:w-[173px] xl:w-[335px] h-[293px] md:h-[229px] xl:h-[443px]"/>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FeelOurLuxurious;
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div id="about">
            <div className='full__section_l_p padding__top padding__bottom  pr-3 md:pr-0'>
                <div className='grid grid-cols-1 xl:grid-cols-6 5xl:grid-cols-7 gap-[15px]'>
                    <div className="order-2 xl:order-1 xl:col-span-3 ">

                        <div className='h-full flex flex-col justify-start xl:justify-center items-center'>
                        <div className="flex justify-center md:justify-start items-center">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <p className="text-lg font-medium leading-9 text-black pt-[4px] text-center xl:text-left pt-0 xl:pt-[10px] ">Lavish Lux Nails & Spa is not just a destination; it's a transformative experience in the heart of Mississauga. Renowned for its blend of luxury and expert craftsmanship, our salon is where indulgence meets excellence. Each visit promises a journey into unparalleled beauty and tranquility, with services ranging from flawless manicures to breathtaking nail art, all tailored to your unique style. Our dedicated team of skilled technicians ensures that every detail is perfected, providing personalized attention that leaves you feeling cherished and looking spectacular. Step into Lavish Lux and discover why we are the pinnacle of elegance and sophistication in Mississauga's beauty scene. Experience the difference that true luxury and expert care can make, and elevate your nail care to a new level of perfection.</p>
                        </div>

                    </div>
                    <div className="order-1 xl:order-2 xl:col-span-3 5xl:col-span-4">
                        <div>
                            <Image src="/assets/images/aboutUs.png" alt="about us image" width={440} height={330} className='w-full md:w-[440px] xl:w-[943px] h-[350px] xl:h-[550px] 2xl:h-[550px] 5xl:h-[650px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
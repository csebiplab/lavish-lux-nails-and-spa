import Image from 'next/image';
import React from 'react';
import "./Treatment.css";

const Treatment = () => {
    return (
        <div className="container">
            {/* small device  */}
            <div className='block xl:hidden pt-[55px]'>
                {/* fisrt div  */}
            <div>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">TREATMENT</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[19px] px-[23px]'>
                <p className="text-base sm:text-lg font-medium text-black">Nails</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base sm:text-lg font-medium text-black">Lashes & brows</p>
                <Image src="/assets/images/line.png" alt='line icon'  width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base sm:text-lg font-medium text-black">Waxing</p>
            </div>
            </div>
            {/* second div  */}
            <div className='py-[15px]'>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">EVENTS</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[19px] px-[23px]'>
                <p className="text-base sm:text-lg font-medium text-black">Group Booking</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base sm:text-lg font-medium text-black">Cocktail Bar</p>
            </div>
            </div>
            {/* third div  */}
            <div>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">SHOP</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[19px] px-[23px]'>
                <p className="text-base sm:text-lg font-medium text-black">Korean Skincare</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base sm:text-lg font-medium text-black">Self-care Accessories</p>
            </div>
            </div>
            </div>


            {/* large device  */}
            <div className='hidden xl:block pt-[97px]'>
             <div className='w-full flex justify-between gap-[20px] 5xl:gap-[24px]'>
                   {/* fisrt div  */}
            <div className='w-1/3'>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">TREATMENT</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[14px] 5xl:py-[19px] px-[10px] 5xl:px-[23px]'>
                <p className="text-lg font-medium text-black">Nails</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base 5xl:text-lg font-medium text-black">Lashes & brows</p>
                <Image src="/assets/images/line.png" alt='line icon'  width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base 5xl:text-lg font-medium text-black">Waxing</p>
            </div>
            </div>
            {/* second div  */}
            <div className='w-1/3'>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">EVENTS</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[14px] 5xl:py-[19px] px-[10px] 5xl:px-[23px]'>
                <p className="text-base 5xl:text-lg font-medium text-black">Group Booking</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base 5xl:text-lg font-medium text-black">Cocktail Bar</p>
            </div>
            </div>
            {/* third div  */}
            <div className='w-1/3'>
            <div className='flex items-center justify-between treatment__bg py-[8px] px-[20px]'>
                <p className="font-family-secondary text-[35px] font-normal text-white">SHOP</p>
                <Image src="/assets/images/right_arrow.png" alt='arrow icon' width={34} height={22}/>
            </div>
            <div className='flex items-center justify-between treatment1__bg py-[14px] 5xl:py-[19px] px-[10px] 5xl:px-[23px]'>
                <p className="text-base 5xl:text-lg font-medium text-black">Korean Skincare</p>
                <Image src="/assets/images/line.png" alt='line icon' width={2} height={10} className='w-[1.5px] h-[10px]'/>
                <p className="text-base 5xl:text-lg font-medium text-black">Self-care Accessories</p>
            </div>
            </div>
             </div>

            </div>
            
        </div>
    );
};

export default Treatment;
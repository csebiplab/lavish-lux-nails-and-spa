import Image from 'next/image';
import React from 'react';

const HeadingIcon = ({text="empty text"}) => {
    return (
        <div className='flex gap-2 items-center'>
            <Image  className='w-[20px] md:w-[70px]' src="/assets/images/right_line.png" width={70} height={1} alt='heading right icon'/>
            <p className="text-3xl md:text-4xl lg:text-5xl 5xl:text-[75px] font-normal text-primary">{text}</p>
            <Image className='w-[20px] md:w-[70px]' src="/assets/images/left_line.png" width={70} height={1} alt='heading left icon'/>
        </div>
    );
};

export default HeadingIcon;
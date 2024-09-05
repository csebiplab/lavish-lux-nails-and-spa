"use client"
import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import ScrollToTop from 'react-scroll-to-top';

const ScrollToTopComponent = () => {
    return (
        <div>
            <ScrollToTop 
                smooth 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                component={<FaArrowUp />}
            />
        </div>
    );
};

export default ScrollToTopComponent;

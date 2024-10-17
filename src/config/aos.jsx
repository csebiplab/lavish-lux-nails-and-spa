"use client"
import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const AosSetup = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AosSetup;
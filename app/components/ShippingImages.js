'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const useScreenOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false); // Default to false initially

  useEffect(() => {
    // This will run only in the browser
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Set initial orientation when the component mounts
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up event listener
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLandscape;
};

const ShippingImages = () => {
  const isLandscape = useScreenOrientation();

  return(
    <div className="hero-right w-full md:h-full flex flex-col items-center px-4 pb-4 md:pt-28 md:pb-12 md:px-12 2xl:pr-40">
        <div className={`h-64 ${isLandscape? 'w-80' : ''} md:w-full md:h-full relative`}>
          <div className="main-image image w-full h-full">
            <Image
              src="/images/shipping_air.webp"
              alt="consol cargo air shipping"
              width={1000}
              height={1000}
              quality={75}
              className="hero-clipped"
            />
          </div>
          <div className="image absolute w-[38%] h-[28%] top-0 left-0">
            <Image
              src={'/images/shipping_sea.webp'}
              alt="consol cargo sea shipping"
              width={1000}
              height={1000}
              quality={75}
              className=""
            />
          </div>
          <div className="image absolute w-[53%] h-[28%] bottom-0 right-0">
            <Image
              src={'/images/shipping_land.webp'}
              alt="consol cargo land shipping"
              width={1000}
              height={1000}
              quality={75}
              className=""
            />
          </div>
        </div>
      </div>
  )
}

export default ShippingImages;
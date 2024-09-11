'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable ImageSlide component
const ImageSlide = ({ src, alt }) => (
  <div className="w-full aspect-video rounded-3xl overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      quality={75}
    />
  </div>
);

const ShippingImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  // Image data
  const images = [
    { src: "/images/shipping_air.webp", alt: "consol cargo air shipping" },
    { src: "/images/shipping_sea.webp", alt: "consol cargo sea shipping" },
    { src: "/images/shipping_land.webp", alt: "consol cargo land shipping" },
  ];

  return (
    <div className="w-full flex flex-col items-center border max-h-64">
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageSlide key={index} src={image.src} alt={image.alt} />
        ))}
      </Slider>
    </div>
  );
}

export default ShippingImages;

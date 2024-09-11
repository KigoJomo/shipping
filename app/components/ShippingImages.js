'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import next from 'next'

// Reusable ImageSlide component
const ImageSlide = ({ src, alt }) => (
  <div className="w-full aspect-video md:aspect-[21/9] px-2 overflow-hidden">
    <Image src={src} alt={alt} width={1000} height={1000} className="w-full rounded-3xl" />
  </div>
)

const ShippingImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4500,
    prevArrow: null,
    nextArrow: null,
  }

  // Image data
  const images = [
    { src: '/images/shipping_air.webp', alt: 'consol cargo air shipping' },
    { src: '/images/shipping_sea.webp', alt: 'consol cargo sea shipping' },
    { src: '/images/shipping_land.webp', alt: 'consol cargo land shipping' },
  ]

  return (
    <div className="w-full md:px-12 rounded-[3rem] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageSlide key={index} src={image.src} alt={image.alt} />
        ))}
      </Slider>
    </div>
  )
}

export default ShippingImages

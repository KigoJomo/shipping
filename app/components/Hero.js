'use client'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import DiagonalArrow from './DiagonalArrow'
import TypewriterComponent from './TypewriterComponent'
import ShippingImages from './ShippingImages'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/Android/i.test(navigator.userAgent))
  }, [])

  return (
    <section
      id="hero"
      className={`h-fit flex flex-col md:flex-row ${isMobile ? 'flex-wrap': ''} items-center gap-0 p-0 md:overflow-hidden`}
    >
      <div className="hero-left w-full flex flex-col justify-between gap-8 md:gap-0 px-4 md:px-12 2xl:pl-40 pt-28 pb-16 relative">
        <div className="left-top w-full md:h-[50vh] flex flex-col gap-[10%] md:gap-4 justify-center relative">
          <Image
            alt=""
            src="/logo-emblem.webp"
            width={750}
            height={750}
            className="absolute left-[50%] translate-x-[-50%] w-full md:w-[80%] max-w[80vw] z-[-30] opacity-10 "
          />

          <h1
            className={`helvetica uppercase tracking-tighter text-4xl md:text-7xl`}
          >
            Consol <span className="text-tertiary helvetica">cargo</span>
          </h1>

          <TypewriterComponent
            textLevel={'h3'}
            text={'Your partner in global shipping solutions'}
            className={'text-2xl md:text-2xl'}
          />
        </div>

        <div className="w-full md:h-1/2 flex gap-0 justify-between pt-4 md:p-0">
          <ScrollAnimationWrapper
            variant="slideInTop"
            className="h-40 md:h-64 aspect-[9/16] overflow-hidden rounded-full border-8 hover:border-2 border-secondary"
          >
            <Image
              src={'/images/shipping.webp'}
              alt="consol cargo shipping"
              height={300}
              width={300}
              className="h-full w-full"
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            variant="slideInBottom"
            className="h-full md:w-1/2 flex flex-col items-end justify-between"
          >
            <p>
              Consol Cargo offers a wide range of different products and
              services by air, sea and land. Each of your shipment will be
              handled with big care
            </p>
            <a
              aria-label="scroll to categories"
              href="#categories"
              className="w-14 md:w-24 aspect-square transform rotate-180 md:rotate-90"
            >
              <DiagonalArrow />
            </a>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <ShippingImages/>
    </section>
  )
}

export default Hero

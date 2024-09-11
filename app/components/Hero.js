import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import DiagonalArrow from './DiagonalArrow'
import TypewriterComponent from './TypewriterComponent'
import ShippingImages from './ShippingImages'

const Hero = () => {

  return (
    <section
      id="hero"
      className={`h-fit flex flex-col items-center gap-8 p-4 md:px-12`}
    >
      <div className="hero-top w-full flex flex-col gap-8 md:gap-6">
        <div className="w-full h-fit py-8 flex flex-col justify-center gap-8 relative">
          <Image
            alt=""
            src="/logo-emblem.webp"
            width={750}
            height={750}
            className="absolute right-[50%] translate-x-[50%] md:right-0 md:translate-x-0 md:top-0 w-full md:w-[80%] max-w[80vw] z-[-30] opacity-10 "
          />

          <h1
            className={`helvetica uppercase tracking-tighter text-4xl md:text-9xl`}
          >
            Consol <span className="text-tertiary helvetica">cargo</span>
          </h1>

          <TypewriterComponent
            textLevel={'h3'}
            text={'Your partner in global shipping solutions'}
            className={'text-2xl md:text-3xl h-16'}
          />
        </div>

        <div className="w-full h-fit flex items-end justify-between md:justify-start md:gap-8 pt-4 md:p-0">

          <ScrollAnimationWrapper
            variant="slideInBottom"
            className="md:order-2 h-fit w-full md:w-1/2 flex flex-col md:flex-row gap-8"
          >
            <p className='w-full text-base md:text-sm'>
              Consol Cargo offers a wide range of different products and
              services by air, sea and land. Each of your shipment will be
              handled with big care
            </p>

            <a
              aria-label="scroll to categories"
              href="#categories"
              className="w-14 md:w-24 aspect-square transform rotate-90 md:rotate-180 scale-75 md:scale-100 md:hover:scale-110"
            >
              <DiagonalArrow />
            </a>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            variant="slideInTop"
            className="md:order-1 flex-shrink-0 h-40 md:h-32 aspect-[9/16] md:aspect-[16/9] overflow-hidden rounded-full border-8 hover:border-2 border-secondary"
          >
            <Image
              src={'/images/shipping.webp'}
              alt="consol cargo shipping"
              height={300}
              width={300}
              className="h-full w-full"
            />
          </ScrollAnimationWrapper>
        </div>
      </div>

      <ShippingImages />

    </section>
  )
}

export default Hero

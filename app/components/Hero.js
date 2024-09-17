import Image from 'next/image'
import TypewriterComponent from './TypewriterComponent'
import ShippingImages from './ShippingImages'

const Hero = () => {

  return (
    <section
      id="hero"
      className={`h-fit flex flex-col items-center gap-8 md:gap-24 p-4 md:px-12`}
    >
      <div className="hero-top w-full flex flex-col gap-8 md:gap-6">
        <div className="w-full h-fit py-8 flex flex-col items-center justify-center gap-8 relative">
          <Image
            alt=""
            src="/logo-emblem.webp"
            width={500}
            height={500}
            className="absolute right-[50%] translate-x-[50%] md:top-0 w-4/5 object-contain md:w-[80%] max-w[80vw] z-[-30] opacity-10 "
          />

          <h1
            className={`helvetica uppercase tracking-tighter text-4xl md:text-9xl`}
          >
            Consol <span className="text-tertiary helvetica">cargo</span>
          </h1>

          <TypewriterComponent
            textLevel={'h3'}
            text={'Your partner in global shipping solutions'}
            className={'text-2xl md:text-3xl h-16 text-text-primary text-center'}
          />
        </div>
      </div>

      <ShippingImages />

    </section>
  )
}

export default Hero

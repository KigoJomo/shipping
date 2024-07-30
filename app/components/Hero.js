import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import DiagonalArrow from "./DiagonalArrow";
import TypewriterComponent from "./TypewriterComponent";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center p-0">
      <div className="hero-left w-1/2 h-full flex flex-col justify-between px-12 2xl:pl-40 pt-28 pb-16">
        <div className="left-top w-full h-1/2 flex flex-col gap-4">
          <h2 className="text-tertiary">cargo delivery</h2>
          <TypewriterComponent
            textLevel={"h2"}
            text={"Your partner in global shipping solutions"}
          />
        </div>
        <div className="w-full h-1/2 flex justify-between">
          <ScrollAnimationWrapper
            variant="slideInTop"
            className="h-full aspect-[9/16] overflow-hidden rounded-full border-8 hover:border-2 border-secondary"
          >
            <Image
              src={"/images/shipping.webp"}
              alt="consol cargo shipping"
              height={300}
              width={300}
              className="h-full w-full"
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            variant="slideInBottom"
            className="h-full w-1/2 flex flex-col items-end justify-between"
          >
            <p>
              Consol Cargo offers a wide range of different products and
              services by air, sea and land. Each of your shipment will be
              handled with big care
            </p>
            <button>
              <DiagonalArrow />
            </button>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="hero-right w-1/2 h-full flex flex-col pt-28 pb-12 px-12 2xl:pr-40">
        <div className="main-image image w-full h-full">
          <Image
            src="/images/shipping_air.jpg"
            alt="consol cargo air shipping"
            width={1000}
            height={1000}
            className="hero-clipped"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

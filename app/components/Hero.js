import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import DiagonalArrow from "./DiagonalArrow";
import TypewriterComponent from "./TypewriterComponent";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center p-0 overflow-y-scroll md:overflow-hidden"
    >
      <div className="hero-left w-full md:w-1/2 h-screen flex flex-col justify-between px-4 md:px-12 2xl:pl-40 pt-28 pb-16">
        <div className="left-top w-full h-[50vh] flex flex-col gap-4">
          <h2 className="text-tertiary">Consol cargo</h2>
          <TypewriterComponent
            textLevel={"h2"}
            text={"Your partner in global shipping solutions"}
          />
        </div>
        <div className="w-full h-1/2 flex justify-center gap-6 md:gap-0 md:justify-between pt-4 md:p-0">
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

      <div className="hero-right w-full md:w-1/2 md:h-full flex flex-col px-4 pb-4 md:pt-28 md:pb-12 md:px-12 2xl:pr-40">
        <div className="w-full h-full relative">
          <div className="main-image image w-full h-[50vh] md:h-full">
            <Image
              src="/images/shipping_air.webp"
              alt="consol cargo air shipping"
              width={1000}
              height={1000}
              className="hero-clipped"
            />
          </div>
          <div className="image absolute w-[38%] h-[28%] top-0 left-0">
            <Image
              src={"/images/shipping_sea.webp"}
              alt="consol cargo sea shipping"
              width={1000}
              height={1000}
              className=""
            />
          </div>
          <div className="image absolute w-[53%] h-[28%] bottom-0 right-0">
            <Image
              src={"/images/shipping_land.webp"}
              alt="consol cargo land shipping"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

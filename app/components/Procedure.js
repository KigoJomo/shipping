"use client";
import { useState } from "react";
import Image from "next/image";
import ProcedureItem from "./ProcedureItem";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const steps = [
  {
    title: "Package Reception",
    description:
      "Your package is delivered to our warehouse. This is the initial step in our shipping process.",
  },
  {
    title: "Photo Documentation",
    description:
      "Photos of your package are taken immediately on arrival. This ensures documentation of its condition.",
  },
  {
    title: "Package Inspection",
    description:
      "We inspect the package to verify contents and check for any issues. This step ensures everything is in order.",
  },
  {
    title: "Quality Control",
    description:
      "A thorough quality check is performed. This ensures the package meets all necessary standards.",
  },
  {
    title: "Package Delivery",
    description:
      "Your package is delivered to your doorstep or picked up from our warehouse. This concludes the shipping process.",
  },
];

const Procedure = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <h3 className="text-center h-[10%] flex items-center">
        Quick Delivery. Low fees. Payment On Delivery
      </h3>

      <div className="w-full h-[90%] flex items-center md:gap-8">
        <ScrollAnimationWrapper variant={"slideInLeft"} className="hidden md:flex h-full w-1/2">
          <Image
            src="/images/mockup.webp"
            alt="consol cargo"
            width={1000}
            height={1000}
            className="h-full w-full rounded-3xl"
          />
        </ScrollAnimationWrapper>
        <div className="procedure-items w-full md:w-1/2 h-full flex flex-col justify-around md:justify-between">
          {steps.map((step, index) => (
            <ProcedureItem
              key={index}
              index={index}
              title={step.title}
              description={step.description}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedure;

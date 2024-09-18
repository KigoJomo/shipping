import React from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const ProcedureItem = ({ index, title, description, isActive, onClick }) => {
  return (
    <ScrollAnimationWrapper
      variant={"slideInRight"}
      duration={1 + (index * 0.25)}
      className={`w-full flex flex-col items-center ${
        isActive ? "max-h-36 md:max-h-32" : "max-h-16"
      } px-4 bg-tertiary overflow-hidden rounded-2xl transition-all duration-500`}
    >
      <button
        className="title w-full flex items-center gap-4 h-16 flex-shrink-0 relative"
        onClick={onClick}
      >
        <h3 className=" text-lg font-light">0{index + 1}</h3>
        <h3 className=" text-lg font-medium">{title}</h3>
        <h3 className=" text-5xl font-extralight absolute right-0">
          {isActive ? <>-</> : <>+</>}
        </h3>
      </button>
      <div
        className="description w-full h-20 md:h-16 pl-9 pr-2 text-sm"
      >
        <p className="max-w-full text-white text-xs md:text-sm">{description}</p>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default ProcedureItem;

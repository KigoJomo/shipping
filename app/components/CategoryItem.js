// components/CategoryItem.js
import DiagonalArrow from "./DiagonalArrow";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const CategoryItem = ({ title, AnimatedComponent, description, bgColor, onClick }) => {
  return (
    <ScrollAnimationWrapper
      variant="fadeIn"
      duration={2}
      className={`category w-full h-1/3 md:h-full md:w-1/3 rounded-3xl border-2 md:border-4 border-transparent hover:border-white transition-all duration-1000 p-4 flex flex-col items-start justify-between md:items-center gap-6 ${bgColor} relative`}
    >
      <h3 className="w-full font-semibold">{title}</h3>
      <div className="h-3/5 md:w-60 aspect-square">
        <AnimatedComponent />
      </div>
      <div className="absolute top-6 right-4 md:static w-3/5 h-4/5 md:w-full md:h-fit flex flex-col md:flex-row items-end md:items-center justify-between md:justify-between">
        <p className="w-4/5 md:w-3/5 text-right md:text-left text-white text-xs md:text-sm">
          {description}
        </p>
        <button className="w-10 md:w-12 md:hover:w-14 aspect-square" onClick={onClick}>
          <DiagonalArrow />
        </button>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default CategoryItem;

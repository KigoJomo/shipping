const { default: ScrollAnimationWrapper } = require("./ScrollAnimationWrapper")

const Category = ({ variant, children, bgColor }) => {
  return (
    <ScrollAnimationWrapper
      variant={variant}
      className={`category w-full h-1/3 md:h-full md:w-1/3 rounded-3xl border-2 md:border-4 border-transparent hover:border-white transition-all  duration-1000 p-4 flex flex-col items-start ${bgColor}`}
    >
      {children}
    </ScrollAnimationWrapper>
  );
};

export default Category;
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

// TestimonialList.js
export default function TestimonialList({reviews}) {

  return (
    <div variant="fadeIn" className="w-full h-auto p-0 flex flex-col gap-4 overflow-y-scroll scrollbar-themed md:gap-8 md:flex-row md:flex-wrap md:justify-center">
      {reviews?.map((testimonial) => (
        <ScrollAnimationWrapper variant="fadeIn" duration={2} key={testimonial.id} className="w-full md:w-1/4 p-4 border rounded-2xl shadow md:hover:shadow-2xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-base capitalize">{testimonial.name}</h3>
            <span className="star text-secondary">{"★".repeat(testimonial.rating)}</span>
          </div>
          <p className="max-w-full text-sm md:text-base text-text-primary">{testimonial.comment}</p>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
};
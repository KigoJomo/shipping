import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

// TestimonialList.js
export default function TestimonialList({reviews}) {

  return (
    <div variant="fadeIn" className="w-full h-full py-4 flex flex-col gap-4">
      {reviews?.map((testimonial) => (
        <ScrollAnimationWrapper variant="fadeIn" duration={2} key={testimonial.id} className="p-4 border rounded-3xl shadow">
          <div className="flex justify-between items-center">
            <h4 className="font-bold capitalize">{testimonial.name}</h4>
            <span className="star text-secondary">{"★".repeat(testimonial.rating)}</span>
          </div>
          <p className="max-w-full text-sm md:text-base">{testimonial.comment}</p>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
};
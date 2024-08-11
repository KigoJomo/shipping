// TestimonialList.js
export default function TestimonialList({reviews}) {

  return (
    <div className="w-full h-full py-4 flex flex-col gap-4">
      {reviews.map((testimonial) => (
        <div key={testimonial.id} className="p-4 border rounded-3xl shadow">
          <div className="flex justify-between items-center">
            <h4 className="font-bold capitalize">{testimonial.name}</h4>
            <span className="star text-secondary">{"★".repeat(testimonial.rating)}</span>
          </div>
          <p>{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
};
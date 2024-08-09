import prisma from "@/lib/prisma";

export default async function TestimonialList() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy:{
      createdAt: 'desc',
    },
  });

  return (
    <div className="w-full h-full py-4 flex flex-col gap-4">
      {testimonials.map((testimonial) => (
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
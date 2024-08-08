import ReviewForm from './ReviewForm'
import TestimonialList from './TestimonialList'

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:justify-center" id="reviews">
      <h2 className="flex-shrink-0">Reviews</h2>
      <div className="w-full h-full md:h-4/5 flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-center justify-center">
          <ReviewForm />
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-center justify-start overflow-y-scroll scrollbar-themed md:pr-9">
          <TestimonialList />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

// Testimonials component (Testimonials.js)
'use client'

import { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'
import TestimonialList from './TestimonialList'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews')
      const data = await res.json()
      setReviews(data)
    } catch (error) {
      console.log('Error fetching reviews:', error)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const handleNewReview = (newReview) => {
    setReviews((PrevReviews) => [newReview, ...PrevReviews])
  }

  return (
    <section
      className="h-fit md:h-screen flex flex-col items-center gap-12 md:gap-6 pt-16 md:justify-center"
      id="reviews"
    >
      <h2 className="flex-shrink-0">Reviews</h2>

      <div className="w-full overflow-x-hidden h-full flex flex-col items-center gap-0">

        <ScrollAnimationWrapper variant="fadeIn" duration={2.5} className="w-full overflow-x-hidden md:w-1/2 h-auto flex-shrink-0 flex flex-col items-center justify-center">
          <ReviewForm onNewReview={handleNewReview} />
        </ScrollAnimationWrapper>

        <div className="w-full h-auto md:h-full flex flex-col items-center justify-start md:pr-9 pt-6 overflow-hidden">
          <TestimonialList reviews={reviews} />
        </div>

      </div>
    </section>
  )
}

export default Testimonials

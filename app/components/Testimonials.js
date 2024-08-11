// Testimonials component (Testimonials.js)
'use client'

import { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'
import TestimonialList from './TestimonialList'

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
      className="flex flex-col items-center gap-4 md:justify-center"
      id="reviews"
    >
      <h2 className="flex-shrink-0">Reviews</h2>
      <div className="w-full h-full md:h-4/5 flex flex-col md:flex-row-reverse gap-6 md:gap-14">
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-center justify-center">
          <ReviewForm onNewReview={handleNewReview} />
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-center justify-start overflow-y-scroll scrollbar-themed md:pr-9">
          <TestimonialList reviews={reviews} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

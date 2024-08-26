'use client'

import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import RegularWrapper from './RegularWrapper'
import DiagonalArrow from './DiagonalArrow'

const RatingButton = ({ index, active, onClick }) => {
  return (
    <button
      type="button"
      className={`text-4xl ${
        active ? 'text-secondary hover:text-secondary-dark' : 'text-tertiary hover:text-white'
      }`}
      onClick={() => onClick(index)}
    >
      ★
    </button>
  )
}

const ReviewForm = ({ onNewReview }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: '',
  })
  const [loading, setLoading] = useState(false)

  // Create refs for each form field
  const commentRef = useRef(null)
  const ratingRef = useRef(null)
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const handleRatingClick = (index) => {
    setFormData((prevData) => ({ ...prevData, rating: index }))
  }

  const clearRating = () => {
    setFormData((prevData) => ({ ...prevData, rating: 0 }))
  }

  // Generic change handler for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? parseInt(value) : value,
    }))
  }

  const createReview = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('api/newReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const newReview = await response.json()
      onNewReview(newReview)

      setFormData({ name: '', email: '', rating: '', comment: '' })
      toast.success(
        'Thanks for your feedback. Review submitted successfully.',
        {
          theme: 'dark',
        }
      )
    } catch (error) {
      console.error(error)
      toast.error(
        'There was an error submitting your review. Please try again.',
        {
          theme: 'dark',
        }
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Determine which field should be in focus next
    if (!formData.rating) {
      ratingRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (!formData.comment) {
      commentRef.current.scrollIntoView({ behavior: 'smooth' })
      commentRef.current.focus()
    } else if (!formData.name) {
      nameRef.current.scrollIntoView({ behavior: 'smooth' })
      nameRef.current.focus()
    } else if (!formData.email) {
      emailRef.current.scrollIntoView({ behavior: 'smooth' })
      emailRef.current.focus()
    } else {
      createReview(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex items-center justify-between p-0 rounded shadow"
    >
      <div className="flex items-center gap-6 w-4/5 overflow-x-scroll scrollbar-hidden snap-x snap-mandatory">
        <div className="rating flex flex-col w-full flex-shrink-0 snap-start" ref={ratingRef}>
          <p className="text-xs md:text-base capitalize font-light text-white-dark">
            How would you rate our services?
          </p>
          <div className="rating-container w-full flex flex-col justify-center gap-2">
            <div className="stars flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <RatingButton
                  key={index}
                  index={index}
                  active={index <= formData.rating}
                  onClick={handleRatingClick}
                />
              ))}
            </div>
            <button
              type="button"
              className="w-fit text-xs md:text-base capitalize font-light text-tertiary hover:text-white underline"
              onClick={clearRating}
            >
              Clear
            </button>
          </div>
        </div>
        <RegularWrapper
          name="comment"
          type="textarea"
          label="What do you think about Consol Cargo's services?"
          value={formData.comment}
          placeholder=""
          onChange={handleChange}
          className={'snap-start'}
          ref={commentRef}
        />
        <RegularWrapper
          name="name"
          type="text"
          label="Name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          className={'snap-start'}
          ref={nameRef}
        />
        <RegularWrapper
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          className={'snap-start'}
          ref={emailRef}
        />
      </div>
      <SubmitButton loading={loading} />
    </form>
  )
}

const SubmitButton = ({ loading }) => (
  <button
    id="submit-review"
    aria-label="Submit Review"
    type="submit"
    className={`h-10 w-10 md:h-16 md:w-16 capitalize flex items-center justify-center rounded-full border border-tertiary md:hover:bg-secondary md:focus:bg-secondary md:focus:outline-none ${
      loading ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={loading}
  >
    <div className="h-full aspect-square flex items-center justify-center">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-3 md:p-4">
          <DiagonalArrow />
        </div>
      )}
    </div>
  </button>
)

const LoadingSpinner = () => (
  <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
)

export default ReviewForm

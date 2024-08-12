// ReviewForm.js
'use client'

import { useState } from 'react'
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

  return (
    <form
      onSubmit={createReview}
      className="w-full flex flex-col gap-10 p-4 rounded shadow"
    >
      <RegularWrapper
        name="name"
        type="text"
        label="Name"
        value={formData.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <RegularWrapper
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <div className="rating flex flex-col w-full">
        <p className="text-xs md:text-base capitalize font-light text-white-dark">
          how would you rate our services?
        </p>
        <div className="rating-container w-full flex items-center justify-between">
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
            className="text-xs md:text-base capitalize font-light text-tertiary hover:text-white underline"
            onClick={clearRating}
          >
            clear
          </button>
        </div>
        {/* when a user clicks on a star, that star and the ones before it should change color to secondary */}
        {/* clicking the clear button resets the rating to 0 */}
      </div>
      <RegularWrapper
        name="comment"
        type="textarea"
        label="Comment"
        value={formData.comment}
        placeholder="What do you think about Consol Cargo's services?"
        onChange={handleChange}
      />
      <SubmitButton loading={loading} />
    </form>
  )
}

const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    className={`w-full px-8 py-4 capitalize flex items-center justify-between rounded-full border border-tertiary md:hover:bg-secondary md:focus:bg-secondary md:focus:outline-none ${
      loading ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={loading}
  >
    {loading ? (
      <>
        <LoadingSpinner />
        <p>submitting review</p>
      </>
    ) : (
      <>
        <p className="text-white">Submit your review</p>
        <div className="w-6 aspect-square">
          <DiagonalArrow />
        </div>
      </>
    )}
  </button>
)

const LoadingSpinner = () => (
  <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
)

export default ReviewForm

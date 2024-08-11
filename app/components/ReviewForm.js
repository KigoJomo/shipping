// ReviewForm.js
'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import RegularWrapper from './RegularWrapper'
import DiagonalArrow from './DiagonalArrow'

const ReviewForm = ({onNewReview}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: '',
  })
  const [loading, setLoading] = useState(false)

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

      const newReview = await response.json();
      onNewReview(newReview);

      setFormData({ name: '', email: '', rating: '', comment: '' })
      toast.success('Thanks for your feedback. Review submitted successfully.', {
        theme: 'dark',
      })
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
      <RegularWrapper
        name="rating"
        type="number"
        label="Rating"
        value={formData.rating}
        placeholder="Enter rating (1-5)"
        onChange={handleChange}
      />
      <RegularWrapper
        name="comment"
        type="textarea"
        label="Comment"
        value={formData.comment}
        placeholder="Write your review here"
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
// ReviewForm component (ReviewForm.js)

'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import RegularWrapper from './RegularWrapper'
import DiagonalArrow from './DiagonalArrow'

export default function ReviewForm({ onSubmit }) {
  // State variables to store form data
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const createReview = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const body = { name, email, rating, comment }
      await fetch('api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // Reset form fields
      setName('')
      setEmail('')
      setRating('')
      setComment('')
      setLoading(false)
      toast.success('Thanks for your feedback. Review submitted successfully.', {
        theme: 'dark',
      })
    } catch (error) {
      console.error(error)
      setLoading(false)
      toast.error(
        'There was an error submitting your review. Please try again.',
        {
          theme: 'dark',
        }
      )
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
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <RegularWrapper
        name="email"
        type="email"
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <RegularWrapper
        name="rating"
        type="number"
        label="Rating"
        value={rating}
        placeholder="Enter rating (1-5)"
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <RegularWrapper
        name="comment"
        type="textarea"
        label="Comment"
        value={comment}
        placeholder="Write your review here"
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className={`w-full px-8 py-4 capitalize flex items-center justify-between rounded-full border border-tertiary md:hover:bg-secondary md:focus:bg-secondary md:focus:outline-none ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
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
    </form>
  )
}

'use client'

import { useState } from 'react'
import RegularWrapper from './RegularWrapper'

export default function ReviewForm({ onSubmit }) {
  // State variables to store form data
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const createReview = async (e) => {
    e.preventDefault()
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
      setRating(0)
      setComment('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={createReview}
      className="w-full flex flex-col gap-4 p-4 rounded shadow"
    >
      <RegularWrapper
        name="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <RegularWrapper
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <RegularWrapper
        name="rating"
        type="number"
        label="Rating"
        placeholder="Enter rating (1-5)"
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <RegularWrapper
        name="comment"
        type="textarea"
        label="Comment"
        placeholder="Write your review here"
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Review
      </button>
    </form>
  )
}

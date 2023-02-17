import React from 'react'
import { useState } from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7)

    const handleClick = () => {
        setRating((prev) => {
            console.log(prev)
            return prev + 1
        })

    }

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">This is an example of a feedback item.</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem

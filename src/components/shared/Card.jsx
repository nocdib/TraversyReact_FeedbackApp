import React from 'react'

function Card({children}) { // children contains the content between the opening and closing tags of the component.
  return (
    <div className='card'>{children}</div>
  )
}

export default Card

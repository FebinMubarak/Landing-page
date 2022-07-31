import React from 'react'
import "./Card.css"
function Card({heading,details,details2}) {
  return (
    <div className="container">
        <div className="h2">{heading}</div>
        <div className="h3">{details}</div>
        <div className="h3">{details2}</div>
    </div>
    
  )
}

export default Card
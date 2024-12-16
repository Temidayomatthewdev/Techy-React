import React from 'react'
import "../Pages/OfferCard.css"

const OfferCard = ({image, title}) => {
  return (
    <div className='offer-card'>
      <img src={image} alt={title} />
      <p style={{position: 'absolute', 
        top:"20%", 
        left: "15%",
        fontSize: "",
        fontWeight:'bolder',
        color: 'White',
        textAlign: "center",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>{title}<br/>Packages</p>
    </div>
  )
}

export default OfferCard

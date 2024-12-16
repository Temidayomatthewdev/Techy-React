import React from 'react'
import "../Component/BSection.css"

const BSection = ({image,title}) => {
  return (
    <div className='Bsec'>
      <img src={image} alt={title} />
      <p style={{position: 'absolute', 
        bottom:"35%", 
        left: "20px",
        fontSize: "14px",
        fontWeight:'bolder',
        color: 'White',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>{title}</p>
    </div>
  )
}

export default BSection

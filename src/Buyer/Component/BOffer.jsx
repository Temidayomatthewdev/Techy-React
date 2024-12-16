import React from 'react'
import "../Component/BOffer.css"

const BOffer = ({image, title}) => {
  return (

      <div className='BOffer'>
      <img src={image} alt={title} />
      <p style={{position: 'absolute', 
        top:"35%", 
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

export default BOffer

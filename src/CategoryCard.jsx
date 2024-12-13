import React from 'react'
import './Categorycard.css'


const CategoryCard = ({title, image}) => {
  return (
    <div className='cards'>
      <img src={image} alt={title} />
      <p style={{position: 'absolute', 
        bottom:"40%", 
        left: "30px",
        fontSize: "18px",
        fontWeight:'bolder',
        color: 'White',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
        }}>{title}</p>
    </div>
  )
}

export default CategoryCard

import React from 'react'
import '../Pages/CategoryCard.css'


const CategoryCard = ({title, image}) => {
  return (
    <div className='cards'>
      <img src={image} alt={title} />
      <p style={{position: 'absolute', 
        bottom:"40%", 
        left: "25px",
        fontSize: "18px",
        fontWeight:'bolder',
        color: 'White',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>{title}</p>
    </div>
  )
}

export default CategoryCard

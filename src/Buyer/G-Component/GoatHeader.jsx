import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const GoatHeader = () => {
    const navigate = useNavigate();
  return (
    
    <header>
       <div className='icon' onClick={() => navigate(-1)}>
              <IoArrowBack />
              </div>
              <h2>Chinazor,</h2>
    </header>
  )
}

export default GoatHeader

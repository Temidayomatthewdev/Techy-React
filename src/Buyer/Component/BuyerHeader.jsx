import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import "../Component/BuyerHeader.css"
import { useNavigate } from 'react-router-dom';

const BuyerHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className='icon' onClick={() => navigate(-1)}>
        <IoArrowBack />
        </div>
        <h2>Chinazor,</h2>
        <p>What would you like to buy?</p>
    </header>
  )
}

export default BuyerHeader


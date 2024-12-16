import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import "../Component/BuyerHeader.css"

const BuyerHeader = () => {
  return (
    <header>
      <div className='icon'>
        <IoArrowBack />
        </div>
        <h2>Chinazor,</h2>
        <p>What would you like to buy?</p>
    </header>
  )
}

export default BuyerHeader


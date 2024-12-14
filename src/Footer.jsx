import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div> <FiHome id="icon" /> Home </div>
      <div><FiShoppingCart id="icon"/>Transact</div>
      <div> <RiCompassDiscoverLine id="icon"/>Discover</div>
    </footer>
  )
}
export default Footer

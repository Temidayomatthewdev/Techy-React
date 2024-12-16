import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import "../Component/BFooter.css"

const BFooter = () => {
  return (
    <footer>
            <div><FiHome id="icon" /> Home </div>
            <div><FiShoppingCart id="icon"/>Transact</div>
            <div> <RiCompassDiscoverLine id="icon"/>Discover</div>
    </footer>
  )
}

export default BFooter

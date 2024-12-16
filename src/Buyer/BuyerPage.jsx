import React from 'react'
import "../Buyer/BuyerPage.css"
import BuyerSection from './Component/BuyerSection'
import BuyerHeader from './Component/BuyerHeader'
import BFooter from './Component/BFooter'


const BuyerPage = () => {
  return (
    <div className='moda'>
        <BuyerHeader />
        < BuyerSection />
        < BFooter />
       
    </div>
  )
}

export default BuyerPage

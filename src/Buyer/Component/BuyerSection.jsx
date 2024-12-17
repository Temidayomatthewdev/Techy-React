import React from 'react'
import BSection from './BSection'
import "../Component/BuyerSection.css"
import BButton from './BButton'
import BOffer from './BOffer'
import { Link } from 'react-router-dom'


const BuyerSection = () => {
    

  return (
    <section className='bSection'>
      
      <h3>Animals</h3>
     
            <div className='Bsec-container'>
    <Link to="/Goat">
    < BSection title='Goats' image= "/Goat.jpg"/>
    </Link>
               
                < BSection title='Cows' image= "/Cow.jpg"/>
                < BSection title='Birds' image= "/bird.jpg"/>
                < BSection title='Rabbits' image= "/Rabbit.jpg"/>
                < BSection title='Goats' image= "/Goat.jpg"/>
                < BSection title='Cows' image= "/Cow.jpg"/>
                < BSection title='Birds' image= "/bird.jpg" style= {{color: "red", }} />
                < BSection title='Rabbits' image= "/Rabbit.jpg"/>
            </div>
                <h3>Crops</h3>
            <div className='Bsec-container'>
                < BSection title='Rices' image= "/rice.jpg"/>
                < BSection title='Beans' image= "/Beans.jpg"/>
                < BSection title='Soya' image= "/Soya.jpg"/>
                < BSection title='Cocoa' image= "/cocoa.jpg"/>
                < BSection title='Rices' image= "/rice.jpg"/>
                < BSection title='Beans' image= "/Beans.jpg"/>
                < BSection title='Soya' image= "/Soya.jpg"/>
                < BSection title='Cocoa' image= "/cocoa.jpg"/>
            </div>
            <h3>Fertilizer</h3>
            <div className='Bsec-container'>
            < BSection title='Goats' image= "/Goat.jpg"/>
                < BSection title='Cows' image= "/Cow.jpg"/>
                < BSection title='Birds' image= "/bird.jpg"/>
                < BSection title='Rabbits' image= "/Rabbit.jpg"/>
                < BSection title='Goats' image= "/Goat.jpg"/>
                < BSection title='Cows' image= "/Cow.jpg"/>
                < BSection title='Birds' image= "/bird.jpg" />
                < BSection title='Rabbits' image= "/Rabbit.jpg"/>
            </div>
            <h4 style={{color:"white", margin: "7px 0px", background: "none"}}>offers/Discounts</h4>
                <div className='offer-container'>
                    <BOffer title="Premium" image ="/Premium.jpg"style={{width:"102px", height: "45px"}}/>
                    <BOffer title="Golden" image ="/gold.jpg" />
                    <BOffer title="Diamond" image ="/diamond.jpg" />
                </div>

            < BButton />
    </section>
    
  )
}

export default BuyerSection

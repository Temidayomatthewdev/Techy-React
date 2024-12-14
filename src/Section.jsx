import React from 'react'
import './Section.css'
import CategoryCard from './CategoryCard'
import OfferCard from './OfferCard'

const Section = () => {
  return (
    <main>
        <section className='section'>
            <h2>Hear Reviews from other farmers</h2>
            <div className='img-sec'>
                <img src="/GrandPa Ai.jpg" alt="" />
            </div>
        </section>
        <section className='section2'>
                <h3>Buy</h3>
            <div className='card-container'>
                < CategoryCard title='Animals' image= "/hen.jpeg"/>
                < CategoryCard title='Crops' image= "/crops.jpg"/>
                < CategoryCard title='Others' image= "/others.jpg"/>
            </div>
                <h3>Sell</h3>
          
            <div className='card-container'>
                < CategoryCard title='Animals' image= "/hen.jpeg"/>
                < CategoryCard title='Crops' image= "/crops.jpg"/>
                < CategoryCard title='Others' image= "/others.jpg"/>
            </div>
        </section>
        <section className='offer-section'>
        <h3 style={{color:"white", margin: "7px 0px"}}>offers/Discounts</h3>
                <div className='offer-container'>
                    <OfferCard title="Premium" image ="/Premium.jpg" />
                    <OfferCard title="Golden" image ="/gold.jpg" />
                    <OfferCard title="Diamond" image ="/diamond.jpg" />
                </div>
        </section>    
                
                
        
        
    </main>
    
  )
}

export default Section

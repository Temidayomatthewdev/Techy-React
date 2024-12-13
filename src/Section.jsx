import React from 'react'
import './Section.css'
import CategoryCard from './CategoryCard'

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
                < CategoryCard title='Crops' image= "/hen.jpeg"/>
                < CategoryCard title='Others' image= "/hen.jpeg"/>
            </div>
                <h3>Sell</h3>
          
            <div className='card-container'>
                < CategoryCard title='Animals' image= "/hen.jpeg"/>
                < CategoryCard title='Crops' image= "/hen.jpeg"/>
                < CategoryCard title='Others' image= "/hen.jpeg"/>
            </div>
            
        </section>
        <section className='section3'>
            <div>
                <h3 style={{color:"white", margin: "5px 0px"}}>offers/Discounts</h3>
            </div>
            <div className='card-container'>
                < CategoryCard title="Premium Package" image= "/hen.jpeg"/>
                < CategoryCard title='Golden Package' image= "/hen.jpeg"/>
                < CategoryCard title='Diamind Package' image= "/hen.jpeg"/>
            </div>
        </section>
        
    </main>
    
  )
}

export default Section

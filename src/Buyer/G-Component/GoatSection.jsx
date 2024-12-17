import React from 'react'
import "../G-Component/GoatSection.css"

const GoatSection = () => {
  return (
    <section className='category-section'>
        <div className='category-header'>
            <span>GOATS</span>
        </div>
        <div className='category-img'>
            <img src="/Goat.jpg" alt="Goats" />
        </div>
        <h2 className='BOG'>Bread of Goats</h2>

        <div className="grid-container">
            <div className="grid-item">
                <img src="/Goat.jpg" alt="Goats" />
                <p>Goats</p>
            </div>
            <div className="grid-item">
                <img src="/Cow.jpg" alt="Cows" />
                <p>Cows</p>
            </div>
            <div className="grid-item">
                <img src="/bird.jpg" alt="Birds" />
                <p>Birds</p>
            </div>
            <div className="grid-item">
                <img src="/Rabbit.jpg" alt="Rabbits" />
                <p>Rabbits</p>
            </div>
            <div className="grid-item">
                <img src="/Goat.jpg" alt="Goats" />
                <p>Goats</p>
            </div>
            <div className="grid-item">
                <img src="/Cow.jpg" alt="Cows" />
                <p>Cows</p>
            </div>
            <div className="grid-item">
                <img src="/bird.jpg" alt="Birds" />
                <p>Birds</p>
            </div>
            <div className="grid-item">
                <img src="/Rabbit.jpg" alt="Rabbits" />
                <p>Rabbits</p>
            </div>
            
        </div>
        <div className='location-section'>
            <select name="location" id="location">
                <option value="lagos">Select Location</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
            </select>
            
        </div>
        <button className='proceed-btn'>PROCEED</button>
        
        
       
    </section>
  )
}

export default GoatSection

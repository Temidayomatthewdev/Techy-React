import React from 'react'
import Header from '../Component/Header'
import SearchBar from '../Pages/SearchBar'
import Section from '../Pages/Section'
import Button from '../Pages/Button'
import Footer from '../Component/Footer'
import "../Layout/RootLayout.css"


const RootLayout = () => {
  return (
    <div className='moda'>
        <Header />
        < SearchBar />
        < Section />
        < Button />
        < Footer />
    </div>
  )
}

export default RootLayout

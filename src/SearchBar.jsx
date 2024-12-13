import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'


const SearchBar = () => {
  return (
    <div className='search-moda'>
        <FaSearch id='icon'/>
        <input type="text"
        placeholder='search for interest'
        />
    </div>
  )
}

export default SearchBar

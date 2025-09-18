import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <h1>How's the sky looking today?</h1>
      <div className='search-bar'>
        <div>
          <div id='search'>
            <img src="/images/icon-search.svg" alt="search" />
            <input type="search" placeholder='Search for a place...' />
          </div>
          <ul className='bg-blur display-none'>
            <li>City name</li>
            <li className='selected-city'>City name</li>
            <li>City name</li>
            <li>City name</li>
            <li>City name</li>
            <li>City name</li>
            <li>City name</li>
          </ul>
        </div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Hero

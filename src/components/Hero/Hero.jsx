import React, { useRef, useState } from 'react'
import "./Hero.css"
import searchCity from '../../services/search'

const Hero = ({onSelectCity}) => {
  const [cities, setCities]=useState([])
  const [value, setValue]=useState("")
  const ulRef=useRef(null)

  const handleSearch = async ()=>{    
    if (!value) {
      ulRef.current.classList.add("display-none")
      return
    }
    ulRef.current.classList.remove("display-none")
    const results=await searchCity(value, 5)
    setCities(results)  
  }  
    
  return (
    <div className='hero'>
      <h1>How's the sky looking today?</h1>
      <div className='search-bar'>
        <div>
          <div id='search'>
            <img src="/images/icon-search.svg" alt="search" />
            <input type="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Search for a place...' />
          </div>
          <ul ref={ulRef} className="bg-blur display-none">
            {cities && cities.length>0? cities.map((city)=>(
              <li onClick={()=>{onSelectCity(city.latitude, city.longitude, city.name, city.country)}} key={city.id} className='selectable'>{city.name}</li>)): 
              <li>
                <img src="/images/icon-loading.svg" alt="Loading..." />
                Search in progress
              </li>
            }
          </ul>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Hero

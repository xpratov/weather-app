import React, { useEffect, useRef, useState } from 'react'
import "./Hero.css"
import searchCity from '../../services/search'

const Hero = ({onSelectCity}) => {
  const [cities, setCities]=useState([])
  const [value, setValue]=useState("")
  const ulRef=useRef(null)
  const [isOpen, setIsOpen]=useState(false)
  const dropdownRef=useRef(null)

  const handleSearch = async ()=>{    
    if (value=="") {
      setIsOpen(false)
      return
    }
    setIsOpen(true)
    const results=await searchCity(value, 5)
    setCities(results)  
  }  

  useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const handleCity=(city)=>{
    onSelectCity(city.latitude, city.longitude, city.name, city.country)
    setIsOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  };
    
  return (
    <div className='hero'>
      <h1>How's the sky looking today?</h1>
      <div className='search-bar'>
        <div ref={dropdownRef}>
          <div id='search'>
            <img src="/images/icon-search.svg" alt="search" />
            <input onKeyDown={handleKeyDown} type="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Search for a place...' />
          </div>
          {isOpen &&
            <ul ref={ulRef} className="bg-blur">
              {cities && cities.length>0? cities.map((city)=>(
                <li onClick={()=>{handleCity(city)}} key={city.id} className='selectable'>{city.name}</li>)): 
                <li>
                  <img src="/images/icon-loading.svg" alt="Loading..." />
                  Search in progress
                </li>
              }
            </ul>
          }
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Hero

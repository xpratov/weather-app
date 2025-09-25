import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"

const Header = ({onStateCelsius, onStateKmh, onStateMillimeters}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isCelsius, setIsCelsius]=useState(true)
  const [isKmh, setIsKmh]=useState(true)
  const [isMillimeters, setIsMillimeters]=useState(true)

  const handleTemperature = (bool)=>{
    setIsCelsius(bool)
    onStateCelsius(bool)
  }

  const handleWindspeed = (bool)=>{
    setIsKmh(bool)
    onStateKmh(bool)
  }

  const handlePrecipitation = (bool)=>{
    setIsMillimeters(bool)
    onStateMillimeters(bool)
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

  const handleUnitButton=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <a href="/">
        <img className='logo' src="/images/logo.svg" alt="Weather app logotip, pratov" />
      </a>
      <div ref={dropdownRef} >
        <button onClick={handleUnitButton}>
          <img src="/images/icon-units.svg" alt="Units" />
          Units
          <img src="/images/icon-dropdown.svg" alt="dropdown" />
        </button>
        {isOpen && 
          <div id='menu-units' >
            <h4>Switch to Imperial</h4>
            <ul>
              <label>Temperature</label>
              <li onClick={()=>{handleTemperature(true)}} className={`${isCelsius && "selected-imperial"}`}>
                Celsius (&deg;C)
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
              <li onClick={()=>{handleTemperature(false)}} className={`${!isCelsius && "selected-imperial"}`}>
                Fahrenheit (&deg;F)
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
            </ul>
            <ul>
              <label>Wind Speed</label>
              <li onClick={()=>{handleWindspeed(true)}} className={`${isKmh && "selected-imperial"}`}>
                km/h
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
              <li onClick={()=>{handleWindspeed(false)}} className={`${!isKmh && "selected-imperial"}`}>
                mph
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
            </ul>
            <ul>
              <label>Precipitation</label>
              <li onClick={()=>{handlePrecipitation(true)}} className={`${isMillimeters && "selected-imperial"}`}>
                Millimeters (mm)
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
              <li onClick={()=>{handlePrecipitation(false)}} className={`${!isMillimeters && "selected-imperial"}`}>
                Inches (in)
                <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
              </li>
            </ul>
          </div>
        }
      </div>
    </header>
  )
}

export default Header

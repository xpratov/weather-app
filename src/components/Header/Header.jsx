import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <a href="/">
        <img className='logo' src="/images/logo.svg" alt="Weather app logotip, pratov" />
      </a>
      <div>
        <button>
          <img src="/images/icon-units.svg" alt="Units" />
          Units
          <img src="/images/icon-dropdown.svg" alt="dropdown" />
        </button>
        <div id='menu-units' className='display-none' >
          <h4>Switch to Imperial</h4>
          <ul>
            <label>Temperature</label>
            <li className='selected-imperial'>
              Celsius (&deg;C)
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
            <li>
              Fahrenheit (&deg;F)
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
          </ul>
          <ul>
            <label>Wind Speed</label>
            <li className='selected-imperial'>
              km/h
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
            <li>
              mph
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
          </ul>
          <ul>
            <label>Precipitation</label>
            <li>
              Millimeters (mm)
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
            <li className='selected-imperial'>
              Inches (in)
              <img className='hidden' src="/images/icon-checkmark.svg" alt="checkmark" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

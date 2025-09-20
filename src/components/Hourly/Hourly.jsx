import React from 'react'
import "./Hourly.css"

const Hourly = () => {
  return (
    <section id='hourly'>
      <header>
        <h1>Hourly forecast</h1>
        <div >
          <button>
            <span>Tuesday</span>
            <img src="/images/icon-dropdown.svg" alt="Open the dropdown" />
          </button>
          <ul className='hidden'>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
        </div>
      </header>
      <ul>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="/images/icon-fog.webp" alt="" />
          <time dateTime="15:00">3 PM</time>
          <span>68°</span>
        </li>
      </ul>
    </section>
  )
}

export default Hourly

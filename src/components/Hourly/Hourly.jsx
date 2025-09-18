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
            <img src="../src/assets/images/icon-dropdown.svg" alt="" />
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
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
        <li>
          <img src="../src/assets/images/icon-fog.webp" alt="" />
          <time datetime="15:00">3 PM</time>
          <span>68°</span>
        </li>
      </ul>
    </section>
  )
}

export default Hourly

import React from 'react'
import "./Overview.css"

const Overview = () => {
  return (
  <>
    <div className="banner">
      <div className='banner-top'>
        <h5>Berlin, Germany</h5>
        <span>Tuesday, Aug 5, 2025</span>
      </div>
      <div className='banner-bottom'>
        <img src="/images/icon-sunny.webp" alt="Sunny" />
        <span>68°</span>
      </div>
    </div>
    <section id='weather_details' aria-label='Weather details'>
      <article>
        <h3>Feels like</h3>
        <p>64<span>°</span></p>
      </article>
      <article>
        <h3>Humidity</h3>
        <p>46<span>%</span></p>
      </article>
      <article>
        <h3>Wind</h3>
        <p>9<span>mph</span></p>
      </article>
      <article>
        <h3>Precipitation</h3>
        <p>0<span>in</span></p>
      </article>
    </section>
  </>
  )
}

export default Overview

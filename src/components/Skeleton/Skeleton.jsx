import React from 'react'
import "./Skeleton.css"

const Skeleton = ({locationCity, weather}) => {  

  return (
    <div id='skeleton'>
      <div id='skeleton-left'>
        <section>
          {locationCity!=null ? weather==null && 
            <div>
              <img src="/images/icon-loading-dots.svg" alt="Loading" />
              <span>Loading...</span>
            </div>: ""
          }
        </section>
        <ul id='summarizes'>
          <li>
            <h6>Feels like</h6>
            <span>---</span>
          </li>
          <li>
            <h6>Humidity</h6>
            <span>---</span>
          </li>
          <li>
            <h6>Wind</h6>
            <span>---</span>
          </li>
          <li>
            <h6>Precipitation </h6>
            <span>---</span>
          </li>
        </ul>
        <article>
          <h4>Daily forecast</h4>
          <ul>
          {[...Array(7)].map((_, i) => (<li key={i}></li>))}
          </ul>
        </article>
      </div>
      <div id='skeleton-right'>
        <header>
          <h4>Hourly forecast</h4>
          <button>
            ---
            <img src="/images/icon-dropdown.svg" alt="down" />
          </button>
        </header>
        <ul>
          {[...Array(7)].map((_, i) => <li key={i} />)}
        </ul>
      </div>
    </div>
  )
}

export default Skeleton

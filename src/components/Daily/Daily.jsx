import React from 'react'
import "./Daily.css"

const Daily = () => {
  return (
    <section id='daily'>
      <h1>Daily forecast</h1>
      <div id='days'>
        <article>
          <p>Tue</p>
          <img src="/images/icon-fog.webp" alt="" />
          <div>
            <span>68°</span>
            <span>57°</span>
          </div>
        </article>
        <article>
          <p>Wed</p>
          <img src="/images/icon-sunny.webp" alt="" />
          <div>
            <span>70°</span>
            <span>59°</span>
          </div>
        </article>
        <article>
          <p>Thu</p>
          <img src="/images/icon-storm.webp" alt="" />
          <div>
            <span>75°</span>
            <span>57°</span>
          </div>
        </article>
        <article>
          <p>Fri</p>
          <img src="/images/icon-snow.webp" alt="" />
          <div>
            <span>77°</span>
            <span>55°</span>
          </div>
        </article>
        <article>
          <p>Sat</p>
          <img src="/images/icon-rain.webp" alt="" />
          <div>
            <span>70°</span>
            <span>59°</span>
          </div>
        </article>
        <article>
          <p>Sun</p>
          <img src="/images/icon-partly-cloudy.webp" alt="" />
          <div>
            <span>77°</span>
            <span>61°</span>
          </div>
        </article>
        <article>
          <p>Mon</p>
          <img src="/images/icon-overcast.webp" alt="" />
          <div>
            <span>75°</span>
            <span>59</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Daily

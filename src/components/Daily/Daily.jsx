import React from 'react'
import "./Daily.css"
import { getWeatherIcon } from '../Overview/Overview';

const Daily = ({daily}) => {

  const getDayOfWeek=(dateStr)=>{
    const date = new Date(dateStr);
    const weekdayShort = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
    return weekdayShort
  }

  const days = [];
  for (let i = 0; i < daily?.time.length; i++) {
    days.push(
      <article key={i}>
        <p>{getDayOfWeek(daily.time[i])}</p>
        <img src={`/images/${getWeatherIcon(daily.weathercode[i])}.webp`} alt="" />
        <div>
          <span>{Math.round(daily?.temperature_2m_max[i])}°</span>
          <span>{Math.round(daily?.temperature_2m_min[i])}°</span>
        </div>
      </article>
    );
  }

  return (
    <section id='daily'>
      <h1>Daily forecast</h1>
      <div id='days'>
        {days}       
        {/* <article>
          <p>Mon</p>
          <img src="/images/icon-overcast.webp" alt="" />
          <div>
            <span>75°</span>
            <span>59</span>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Daily

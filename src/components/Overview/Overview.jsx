import React, { useState } from 'react'
import "./Overview.css"
import { celsiusToFahrenheit, kmhToMph, mmToInch } from '../../utils/conversions';

function getWeatherIcon(code) {
  if ([0, 1].includes(code)) return "icon-sunny";
  if ([2].includes(code)) return "icon-partly-cloudy";
  if ([3].includes(code)) return "icon-overcast";
  if ([45, 48].includes(code)) return "icon-fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "icon-drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "icon-rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "icon-snow";
  if ([95, 96, 99].includes(code)) return "icon-storm";
  return "icon-sunny"; // default
}

const Overview = ({locationCity, weather, isCelsius, isKmh, isMillimeters} ) => {
  
  const prettyDate=(isoDate)=>{
    const date = new Date(isoDate);
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    return formatted
  }
  
  return (
  <>
    <div className="banner">
      <div className='banner-top'>
        <h5>{locationCity.name}, {locationCity.country}</h5>
        <span>{prettyDate(weather.currentWeather?.time)}</span>
      </div>
      <div className='banner-bottom'>
        <img src={`/images/${getWeatherIcon(weather.currentWeather?.weathercode)}.webp`} alt="Sunny" />
        <span>{isCelsius? Math.round((weather.currentWeather?.temperature))+"°" : celsiusToFahrenheit(Math.round((weather.currentWeather?.temperature)))}</span>
      </div>
    </div>
    <section id='weather_details' aria-label='Weather details'>
      <article>
        <h3>Feels like</h3>
        <p>{isCelsius? Math.round(weather.hourly?.apparent_temperature[0])+"°" : celsiusToFahrenheit(Math.round(weather.hourly?.apparent_temperature[0]))}</p>
      </article>
      <article>
        <h3>Humidity</h3>
        <p>{weather.hourly?.relativehumidity_2m[0]}<span>%</span></p>
      </article>
      <article>
        <h3>Wind</h3>
        <p>{isKmh? Math.round(weather.currentWeather?.windspeed)+"km/s" : kmhToMph(Math.round(weather.currentWeather?.windspeed))}</p>
      </article>
      <article>
        <h3>Precipitation</h3>
        <p>{weather.precipitation && ( isMillimeters? Math.round(weather.precipitation[0])+"mm" : mmToInch(Math.round(weather?.precipitation[0])))}</p>
      </article>
    </section>
  </>
  )
}

export {getWeatherIcon};
export default Overview

import { useEffect, useState } from 'react'
import './App.css'
import Daily from './components/Daily/Daily'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Hourly from './components/Hourly/Hourly'
import Overview from './components/Overview/Overview'
import getWeather from './services/api'

function App() {
  const [locationCity, setLocationCity]=useState({}); // {latitude, longitude}
  const [weather, setWeather]=useState(null)

  useEffect(() => {
    if (locationCity.latitude && locationCity.longitude) {
      const fetchWeather = async () => {
        const obhavo = await getWeather(locationCity.latitude, locationCity.longitude);
        setWeather(obhavo);
      };
      fetchWeather();
    }
  }, [locationCity]); 
      
  console.log(weather);
  

  return (
  <>
    <Header/>
    <Hero onSelectCity={(latitude, longitude, name, country)=>{setLocationCity({latitude, longitude, name, country})}}/>
    <div id='desktoping'>
      <div id='desktoping-left'>
        <Overview locationCity={locationCity} weather={{currentWeather: weather?.current_weather, hourly: weather?.hourly, precipitation: weather?.daily.precipitation_sum}}/>
        <Daily/>
      </div>
      <Hourly/>
    </div>
    <h1 id='signature'>by <a target='_blank' href="https://pratov.uz">PRATOV.UZ</a></h1>
  </>
  )
}

export default App

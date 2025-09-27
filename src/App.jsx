import { useEffect, useState } from 'react'
import './App.css'
import Daily from './components/Daily/Daily'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Hourly from './components/Hourly/Hourly'
import Overview from './components/Overview/Overview'
import getWeather from './services/api'
import Skeleton from './components/Skeleton/Skeleton'
import NoData from './components/NoData/NoData'
import Error from './components/Error/Error'

function App() {
  const [locationCity, setLocationCity]=useState(null); // {latitude, longitude}
  const [cities, setCities]=useState(null)
  const [weather, setWeather]=useState(null)
  const [isCelsius, setIsCelsius]=useState(true)
  const [isKmh, setIsKmh]=useState(true)
  const [isMillimeters, setIsMillimeters]=useState(true)
  const [error, setError]=useState(false)
 
  const handleCelsiusChange = (boolean)=>{
    setIsCelsius(boolean)
  }
  const handleKmhChange = (boolean)=>{
    setIsKmh(boolean)
  }
  const handleMillimetersChange = (boolean)=>{
    setIsMillimeters(boolean)
  }  


  
  useEffect(() => {
    if (locationCity?.latitude && locationCity?.longitude) {
      const fetchWeather = async () => {
        const obhavo = await getWeather(locationCity.latitude, locationCity.longitude);
        setWeather(obhavo);
      };
      fetchWeather();
    }
  }, [locationCity]);   

  const showMainUI = Boolean(weather)
  const isInitial = cities === null
  const noCitiesFound = Array.isArray(cities) && cities.length === 0

  if (error){
    return (
      <>
        <Header onStateCelsius={handleCelsiusChange} onStateKmh={handleKmhChange} onStateMillimeters={handleMillimetersChange}/>
        <Error/>
      </>
    )
  }
  return (
  <>
    <Header onStateCelsius={handleCelsiusChange} onStateKmh={handleKmhChange} onStateMillimeters={handleMillimetersChange}/>
    <Hero onCities={(data)=>{
      setCities(data)
        if (Array.isArray(data) && data.length === 0) {
          setWeather(null);
          setLocationCity(null);
        }
      }} 
      onSelectCity={(latitude, longitude, name, country)=>{setLocationCity({latitude, longitude, name, country})}}
      onError={(bool)=>{setError(bool)}}
      />
    {showMainUI? (
      <div id='desktoping'>
        <div id='desktoping-left'>
          <Overview isCelsius={isCelsius} isKmh={isKmh} isMillimeters={isMillimeters} locationCity={locationCity} weather={{currentWeather: weather?.current_weather, hourly: weather?.hourly, precipitation: weather?.daily.precipitation_sum}}/>
          <Daily isCelsius={isCelsius} daily={weather?.daily}/>
        </div>
        <Hourly isCelsius={isCelsius} hourly={weather?.hourly} timezone={weather?.timezone} dailyTime={weather?.daily.time}/>
      </div>
    ) : isInitial ? (
      <Skeleton weather={weather} locationCity={locationCity}/>
    ) : noCitiesFound ? (
      <NoData/>
    ) : (
      <Skeleton weather={weather} locationCity={locationCity}/>
    ) }        
    <h1 id='signature'>by <a target='_blank' href="https://pratov.uz">PRATOV.UZ</a></h1>
  </>
  )
}

export default App

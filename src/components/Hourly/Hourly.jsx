import React, { useEffect, useRef, useState } from 'react'
import "./Hourly.css"
import { DateTime } from "luxon";
import { getWeatherIcon } from '../Overview/Overview';
import { celsiusToFahrenheit } from '../../utils/conversions';

const Hourly = ({hourly, timezone, dailyTime, isCelsius}) => {
  const weekDaysRef=useRef(null)
  const [hours, setHours]=useState(null)
  const [weekDay, setWeekDay]=useState(null)
  const [isOpen, setIsOpen] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function formatToHour(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  }

  function getRemainingHours(hourly, selectedDate, tz) {
    if (!hourly || !hourly.time) return { time: [], temperature_2m: [] };
    const now = DateTime.now().setZone(tz);
    const today = now.toISODate();
    const result = []
    for (let i = 0; i < hourly?.time.length; i++) {
      const dateTime = DateTime.fromISO(hourly.time[i], { zone: tz });
      const datePart = dateTime.toISODate();
      if (datePart === selectedDate) {
        if (selectedDate === today) {
          if (dateTime > now) {
            result.push(
              {
                time: hourly.time[i],
                temperature_2m: hourly.temperature_2m[i],
                weathercode: getWeatherIcon(hourly.weathercode[i])
              }
            )
          }
        } else {
          result.push(
            {
              time: hourly.time[i],
              temperature_2m: hourly.temperature_2m[i],
              weathercode: getWeatherIcon(hourly.weathercode[i])
            }
          )
        }
      }
    }
    setHours(result)
    return result;
  }

  const handleDay=(day)=>{    
    if (!day) return
    getRemainingHours(hourly, day, timezone);
    setWeekDay(getWeekday(day))
    setIsOpen(!isOpen)
  }

  function getWeekday(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }  

  const handleWeekButton=()=>{
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    handleDay(dailyTime? dailyTime[0] : "")  
  },[dailyTime])

  return (
    <section id='hourly'>
      <header>
        <h1>Hourly forecast</h1>
        <div ref={dropdownRef}>
          <button onClick={handleWeekButton}>
            <span>{weekDay}</span>
            <img src="/images/icon-dropdown.svg" alt="Open the dropdown" />
          </button>
          {isOpen && 
            <ul ref={weekDaysRef}>
              {dailyTime?.map((time)=>(
                <li onClick={()=>{handleDay(time)}} key={time}>{getWeekday(time)}</li>
              ))}
            </ul>
          }
        </div>
      </header>
      <ul>
        {hours?.map((hour)=>(
          <li key={hour.time}>
            <img src={`/images/${hour.weathercode}.webp`} alt={`${hour.weathercode} pratov`} />
            <time dateTime={`${hour.time}`}>{formatToHour(hour.time)}</time>
            <span>{isCelsius? Math.round(hour.temperature_2m)+"°" : celsiusToFahrenheit(Math.round(hour.temperature_2m))}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hourly

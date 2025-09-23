const OPEN_METEO="https://api.open-meteo.com/v1/forecast"

async function getWeather(latitude, longitude) {
  if (latitude == null || longitude == null) return null;

  const result = await fetch(
    `${OPEN_METEO}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&forecast_days=7&timezone=auto&current_weather=true`
  );  

  if (!result.ok) throw new Error(`API error ${result.status}`);
  const data = await result.json();
  return data;
}

export default getWeather;

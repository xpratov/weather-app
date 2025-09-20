const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

async function searchCity(query, count) {
  if (!query) return [];

  const result=await fetch(`${GEO_URL}?name=${query}&count=${count}&language=en&format=json`);  
  const data= await result.json()

  return data.results?.map((city) => ({
    id: city.id,
    name: city.name,
    country: city.country,
    latitude: city.latitude,
    longitude: city.longitude,
  })) || [];
}


export default searchCity
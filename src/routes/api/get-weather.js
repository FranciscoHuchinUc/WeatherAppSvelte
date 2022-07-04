const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_APIKEY}`,
    'X-RapidAPI-Host': `${import.meta.env.VITE_APIHOST}`
  }
}

export async function get (event) {
  const { searchParams } = event.url
  const query = searchParams.get('q') ?? 'Buenos Aires'
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS
  )
  const data = await response.json()

  const { location, current } = data
  const { name, region, localtime, country } = location
  const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current
  const { text, code } = condition

  const body = {
    conditionCode: code,
    conditionText: text,
    country,
    localtime,
    locationName: name,
    locationRegion: region,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir
  }

  return {
    status: '200',
    body
  }
}

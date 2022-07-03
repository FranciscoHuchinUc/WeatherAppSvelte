const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2e30f3d916mshd9a2f331f5c0251p16dbbajsn18967dc95af5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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
  const { text, icon } = condition

  const body = {
    conditionIcon: icon,
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

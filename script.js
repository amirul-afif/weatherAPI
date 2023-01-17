
const getWeatherData = (city) => {
  const URL = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6216771f0emshe1ca3c42d50d674p1def0djsn7f504c306bdb',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  return fetch(`${URL}${city}`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;

  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {

  console.log(weatherData, 'data')
  // console.log(weatherData.location.name)
  document.getElementById('city-name').innerText = weatherData.location.name
  document.getElementById('weather-type').innerText = weatherData.current.condition.text
  document.getElementById('temp').innerText = weatherData.current.temp_c
  document.getElementById('min-temp').innerText = weatherData.forecast.forecastday[0].day.mintemp_c
  document.getElementById('max-temp').innerText = weatherData.forecast.forecastday[0].day.maxtemp_c
}
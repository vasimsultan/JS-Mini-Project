const API_KEY = '0d4b9114ead8bf80082f05e7960a4b0e';

const weather = document.getElementById('weather');
const search = document.getElementById('search');
const form = document.querySelector('form');

const getWeather = async (city) => {
    weather.innerHTML = '<h1>Loading weather data...</h1>';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    showWeather(data);
}

const x = document.getElementById("press");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}



const showWeather = (data) => {
    if (data.cod === '404') {
        weather.innerHTML = '<h1>City not found </h1>';
        return;
    }
    weather.innerHTML = `
        <div>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png";
            <h3>${data.main.temp}</h3>
            <h3>${data.weather[0].main}</h3>
        </div>
    `;
}

form.addEventListener('submit', function(event) {
    getWeather(search.value);
    event.preventDefault();
});

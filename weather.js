const apiKey = "97ed86b99fdcf738c7a080e0fa9fde20";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/7774/7774417.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src =
      "https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src =
      "https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src =
      "https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src =
      "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src =
      "https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src =
      "https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
checkWeather();

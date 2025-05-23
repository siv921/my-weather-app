function updateCity(event) {
  event.preventDefault();
  let newHeading = document.querySelector("h1");
  let searchInputElement = document.querySelector("#new-city");
  let city = searchInputElement.value;

  let apiKey = "d102f34aao5ce8t34e64ea7aab7a37d2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateTemperature);
}

function updateTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#main-degrees-value");
  let newHeading = document.querySelector("h1");
  newHeading.innerHTML = response.data.city;
  currentTemp.innerHTML = temperature;
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${currentDay} ${hours}:${minutes} `;
}

let city = document.querySelector("#update-city");
city.addEventListener("submit", updateCity);

let currentDate = new Date();
let updateDay = document.querySelector("#day-time");

updateDay.innerHTML = formatDate(currentDate);

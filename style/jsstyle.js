<<<<<<< HEAD
let now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();

function formatDate(date) {
  return currentDate;
}
let currentDate = `${day}, ${month} ${date} ${hours}:${minutes}`;
let h3 = document.querySelector("h3");
h3.innerHTML = currentDate;

function logPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(handleTemp);
}

function handleTemp(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.name}`;
  let temp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("#currentTemperature");
  h3.innerHTML = `${temp} °C`;
}
function searching(event) {
  event.preventDefault();
  let newCity = document.querySelector(".city");
  searchCity(newCity.value);

  function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(newUrl).then(handleTemp);
  }
}
function publishNewTemp(response) {
  let h3 = document.querySelector("h3");
  let temp = Math.round(response.data.main.temp);
  h3.innerHTML = `${temp} °C`;
}

navigator.geolocation.getCurrentPosition(logPosition);

let search = document.querySelector("form");
search.addEventListener("submit", searching);

let current = document.querySelector("button");
current.addEventListener("click", logPosition);
=======
let now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();

function formatDate(date) {
  return currentDate;
}
let currentDate = `${day}, ${month} ${date} ${hours}:${minutes}`;
let h3 = document.querySelector("h3");
h3.innerHTML = currentDate;

function logPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(handleTemp);
}

function handleTemp(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.name}`;
  let temp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("#currentTemperature");
  h3.innerHTML = `${temp} °C`;
}
function searching(event) {
  event.preventDefault();
  let newCity = document.querySelector(".city");
  searchCity(newCity.value);

  function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(newUrl).then(handleTemp);
  }
}
function publishNewTemp(response) {
  let h3 = document.querySelector("h3");
  let temp = Math.round(response.data.main.temp);
  h3.innerHTML = `${temp} °C`;
}

navigator.geolocation.getCurrentPosition(logPosition);

let search = document.querySelector("form");
search.addEventListener("submit", searching);

let current = document.querySelector("button");
current.addEventListener("click", logPosition);
>>>>>>> 369e59ec817c9a456e88bb5de142f31ea3268032

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  //Temp
  const temp = document.createElement("p");
  temp.className = "fs-4";
  temp.textContent =
    "Temperature: " +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m;

  weatherArea.appendChild(temp);
}

button.addEventListener("click", getWeather);
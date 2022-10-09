const API_KEY = "1866275a8403afe86e5cf80f653ff502";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerHTML = `${data.name},  ${data.main.temp} <sup>o</sup>C`;
      weather.innerText = ` ${data.weather[0].main}`;

      //   const name = data.name;
      //   const weather = data.weather[0].main;
      //   console.log(data.name, data.weather[0].main);
    });
}

/**
 *
 */
function onGeoError() {
  alert("Can't find you., No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

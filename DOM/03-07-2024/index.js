let form = document.querySelector("#form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let cityName = document.querySelector("#cityName").value;

  let apiKey = "9fcdc72c6a81841508afbe6f85a76cdb";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let weatherInfo = document.querySelector("#weatherInfo");
      weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p> ※ Temperature: ${data.main.temp} °C ※ </p>
            <p> ※ Description: ${data.weather[0].description} ※ </p>
            <p> ※ Visibility: ${data.visibility} ※ </p>
            <p> ※ Wind: ${data.wind.speed} km/h ※ </p>
            `;
    })
    .catch((err) => {
      console.log(err);
    });
});

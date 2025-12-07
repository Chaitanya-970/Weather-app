const apiKey ="45e22f5ea3e4cb50320a2ed029478b11";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".input-content input");
const searchBtn=document.querySelector(".input-content button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response= await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".output").style.display = "none";
  } else {
  let data= await response.json();


document.querySelector(".city").innerHTML= data.name;

document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";

document.querySelector(".humidity").innerHTML= data.main.humidity + "%";

document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

//weather condition icons
if(data.weather[0].main==="Clouds"){
  weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main==="Clear" || data.weather[0].main==="Haze"){
  weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main==="Rain"){
  weatherIcon.src="images/rain.png";
}
else if(data.weather[0].main==="Drizzle"){
  weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main==="Mist"){
  weatherIcon.src="images/mist.png";
}

    document.querySelector(".error").style.display = "none";
    document.querySelector(".output").style.display = "block";
  }
}

searchBtn.addEventListener("click" ,() => {
  checkWeather(searchBox.value);
} );


searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


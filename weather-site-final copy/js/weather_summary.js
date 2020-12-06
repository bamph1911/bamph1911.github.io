function getData(cityId){
  const apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=2ca67c1f6c6a4e7663332f5acaf7742b&units=imperial";
  const apiForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=2ca67c1f6c6a4e7663332f5acaf7742b&units=imperial";

fetch(apiWeatherUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {

    console.log(weatherData);

    
    let current = document.getElementById('current');
    let high = document.getElementById('high');
    let humidity = document.getElementById('humidity');
    let windSpeed = document.getElementById('windSpeed');
    let windChill = document.getElementById('windChill');

    current.textContent = weatherData.weather[0].main;
    high.textContent = weatherData.main.temp;
    humidity.textContent = weatherData.main.humidity;
    windSpeed.textContent = weatherData.wind.speed;
    
    let temp = high.textContent;
    let wSpeed = windSpeed.textContent;
    let wChill = (f=35.47 + 0.6215*temp-35.75*Math.pow(wSpeed,0.16) + 0.4275*temp*Math.pow(wSpeed, 0.16)).toFixed(2)
    if (temp < 50 && wSpeed > 3.0){
      windChill.textContent = wChill;
    }
    else {
      windChill.textContent = "N/A"
    }
    return fetch(apiForecastUrl)
  }).then(function(forecastResponse){
    return forecastResponse.json();
  }).then(function(forecastJson){
    const fullForcast = forecastJson.list;
    // Get just the 1 time in each of the 5 days
    const fiveDayData = fullForcast.filter(function(singleForcast){
      const hour = singleForcast.dt_txt.split(" ")[1];
      return hour === "18:00:00";
    })

    function createCard(singleDayForcast){
      // Grab the data for the card
      var dateObj = new Date(singleDayForcast.dt * 1000);
      const dayOfWeek = dateObj.toLocaleString("default", { weekday: "long" })
      const temp = singleDayForcast.main.temp;
      const icon = singleDayForcast.weather[0].icon;
      const imagesrc = 'https://openweathermap.org/img/w/' + icon + '.png';
      // create the card
      const card = `<div class="forcast-card"><p>${dayOfWeek}</p><p>${temp}</p><img src=${imagesrc} /></div>`
      
      const forcastContainer = document.getElementById('forcast-container');
      // Add the card to the container
      forcastContainer.innerHTML += card;
    }

    for (let i = 0; i < fiveDayData.length; i++) {
      const day = fiveDayData[i];
      createCard(day)
    }
  });
}

const currentURL = window.location.href.toLowerCase();
console.log('You are currently at this URL: ', currentURL)

if(currentURL.indexOf('preston') > 0){
  getData(5604473);
}
if(currentURL.indexOf('sodasprings') > 0){
  // TODO: UPDATE THE CITY ID FOR SODASPRINGS BEFORE CALLING THIS FUNCTION
  getData(5607916);
}
if(currentURL.indexOf('fishhaven') > 0){
  // TODO: UPDATE THE CITY ID FOR FISHHAVEN BEFORE CALLING THIS FUNCTION
  getData(5585000)
}



//   currently high is 32.85 and windspeed is 3.36 so the windchill should be 29.53
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2ca67c1f6c6a4e7663332f5acaf7742b&units=imperial";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiUrl, true);
weatherRequest.send();
fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let weatherData = JSON.parse(weatherRequest.responseText);
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

  });

//   currently high is 32.85 and windspeed is 3.36 so the windchill should be 29.53
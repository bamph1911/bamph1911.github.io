const apiUrl = "https://api.covidtracking.com/v1/states/id/current.json";
fetch(apiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById("positive-increase").textContent = jsObject.positiveIncrease;
        document.getElementById("recovered").textContent = jsObject.recovered;
        document.getElementById("hospitalized-currently").textContent = jsObject.hospitalizedCurrently;
        
       
    });
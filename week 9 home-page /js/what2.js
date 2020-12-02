const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

   
    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Preston"){
            let townCard = document.createElement("div");
            let townInfo = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let townImage = document.createElement("div");
            let image = document.createElement("img");


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);

            townInfo.appendChild(h2);
            townInfo.appendChild(motto);
            townInfo.appendChild(year);
            townInfo.appendChild(pop);
            townInfo.appendChild(rain);

            townImage.appendChild(image);


            townCard.appendChild(townInfo)
            townCard.appendChild(townImage)


            document.getElementById("cards").appendChild(townCard);
           
        }
            
    

    }
    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Soda Springs"){
            let townCard = document.createElement("div");
            let townInfo = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let townImage = document.createElement("div");
            let image = document.createElement("img");


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);

            townInfo.appendChild(h2);
            townInfo.appendChild(motto);
            townInfo.appendChild(year);
            townInfo.appendChild(pop);
            townInfo.appendChild(rain);

            townImage.appendChild(image);

            townCard.appendChild(townInfo)
            townCard.appendChild(townImage)


            document.getElementById("cards").appendChild(townCard);
            
        }
            
    

    }
    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Fish Haven"){
            let townCard = document.createElement("div");
            let townInfo = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let townImage = document.createElement("div");
            let image = document.createElement("img");


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);

            townInfo.appendChild(h2);
            townInfo.appendChild(motto);
            townInfo.appendChild(year);
            townInfo.appendChild(pop);
            townInfo.appendChild(rain);

            townImage.appendChild(image);
            
            townCard.appendChild(townInfo)
            townCard.appendChild(townImage)


            document.getElementById("cards").appendChild(townCard);
            
        }
            
    

    }
});
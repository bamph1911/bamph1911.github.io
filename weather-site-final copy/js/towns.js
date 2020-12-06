// Complete need to transfer over.; This version has the links with the townname on the cards.
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

   
    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Preston"||towns[i].name == "Soda Springs"||towns[i].name == "Fish Haven") {
          let town_name = document.createElement("section");
          let text = document.createElement("div");
            let link = document.createElement("a");
            let h2 = document.createElement("h2");
            let motto = document.createElement("h3");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let image = document.createElement("img");
    
        
    
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + " in";
            image.setAttribute('src', 'images/' + towns[i].photo);
            
            link.appendChild(h2)
            text.appendChild(link);
            text.appendChild(motto);
            text.appendChild(year);
            text.appendChild(pop);
            text.appendChild(rain);
    

            town_name.appendChild(text);
            town_name.appendChild(image);
            
            
            
            if(towns[i].name == 'Preston'){
                link.setAttribute("href","./preston.html")
                document.getElementById("cards").appendChild(town_name);
              }
              else if(towns[i].name == 'Soda Springs'){
                link.setAttribute("href","./sodasprings.html")
                document.getElementById("cards").appendChild(town_name);
                
              }
              else{
                link.setAttribute("href","./fishhaven.html")
                document.getElementById("cards").appendChild(town_name);
              }
    }
}

  
});



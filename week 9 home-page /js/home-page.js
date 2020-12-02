const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

   
    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Preston") {
            let town_name = document.createElement("section");
            let text = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let image = document.createElement("img");
    
        
    
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            
            
            text.appendChild(h2);
            text.appendChild(motto);
            text.appendChild(year);
            text.appendChild(pop);
            text.appendChild(rain);
    
            
            town_name.appendChild(text);
            town_name.appendChild(image);
            
            
            
            document.getElementById('cards').appendChild(town_name);
    }
}

    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Soda Springs") {
            let town_name = document.createElement("section");
            let text = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let image = document.createElement("img");
    
        
    
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            
            
            text.appendChild(h2);
            text.appendChild(motto);
            text.appendChild(year);
            text.appendChild(pop);
            text.appendChild(rain);
    
            town_name.appendChild(text);
            town_name.appendChild(image);
            
            
            document.getElementById('cards').appendChild(town_name);
        }}
      

    for (let i = 0; i < towns.length; i++ ) { 
        
        if (towns[i].name == "Fish Haven") {
            let town_name = document.createElement("section");
            let text = document.createElement("div");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let image = document.createElement("img");
    
        
    
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            
            
            text.appendChild(h2);
            text.appendChild(motto);
            text.appendChild(year);
            text.appendChild(pop);
            text.appendChild(rain);
    
            town_name.appendChild(text);
            town_name.appendChild(image);
            
            
            document.getElementById('cards').appendChild(town_name);
        }




// original
// if (towns[i].name == "Soda Springs") {
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let motto = document.createElement("p");
//     let year = document.createElement("p");
//     let pop = document.createElement("p");
//     let rain = document.createElement("p");
//     let image = document.createElement('img');



//     h2.textContent = towns[i].name; 
//     card.appendChild(h2);

//     motto.textContent = towns[i].motto;
//     card.appendChild(motto);

//     year.textContent = 'Year Founded: ' + towns[i].yearFounded;
//     card.appendChild(year);

//     pop.textContent = 'Population: ' + towns[i].currentPopulation;
//     card.appendChild(pop);

//     rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
//     card.appendChild(rain);

  
//     image.setAttribute('src', 'images/' + towns[i].photo);
//     card.appendChild(image)


//     document.querySelector('div.cards').appendChild(card);
//     }
    
//     if (towns[i].name == "Fish Haven") {
//         let card = document.createElement('section');
//         let h2 = document.createElement('h2');
//         let motto = document.createElement("p");
//         let year = document.createElement("p");
//         let pop = document.createElement("p");
//         let rain = document.createElement("p");
//         let image = document.createElement('img');

    

//         h2.textContent = towns[i].name; 
//         card.appendChild(h2);

//         motto.textContent = towns[i].motto;
//         card.appendChild(motto);

//         year.textContent = 'Year Founded: ' + towns[i].yearFounded;
//         card.appendChild(year);

//         pop.textContent = 'Population: ' + towns[i].currentPopulation;
//         card.appendChild(pop);

//         rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
//         card.appendChild(rain);

       
//         image.setAttribute('src', 'images/' + towns[i].photo);
//         card.appendChild(image)


//         document.querySelector('div.cards').appendChild(card);
// } 
}
});



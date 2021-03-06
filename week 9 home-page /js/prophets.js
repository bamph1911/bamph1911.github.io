const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {  
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let db = document.createElement("p");
        let pb = document.createElement("p");
        let image = document.createElement('img');
    
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        
        card.appendChild(h2);

        db.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        card.appendChild(db);

        pb.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        card.appendChild(pb);

        image.setAttribute('src', prophets[i].imageurl);
        card.appendChild(image)

    
        document.querySelector('div.cards').appendChild(card);
    }

});



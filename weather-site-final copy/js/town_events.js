function getData(){
  const townInfoApi = "https://byui-cit230.github.io/weather/data/towndata.json"


fetch(townInfoApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (towndata) {

    console.log(towndata);
    const towns = towndata.towns;
    let city = '';
    const currentURL = window.location.href.toLowerCase();
    
    if(currentURL.indexOf('preston') > 0){
      city = 'Preston'
    }
    if(currentURL.indexOf('sodasprings') > 0){
      city = 'Soda Springs'
    }
    if(currentURL.indexOf('fishhaven') > 0){
      city = 'Fish Haven'
    }
    console.log('city: ', city)

    function updateEventCard(eventArray){
      for (let j = 0; j < eventArray.length; j++) {
        const event = eventArray[j];
        const eventCard = document.getElementById('event-card');
        const eventDetail = `<p class="event-detail">${event}</p>`
        eventCard.innerHTML += eventDetail;
    }
  }

    for (let index = 0; index < towns.length; index++) {
      console.log("Looping")
      const town = towns[index];
      if(town.name === city){
        console.log("Found the city")
        updateEventCard(town.events)
      }
    }

  })
}
getData();
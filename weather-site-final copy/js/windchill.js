function setWindChill(temp,speed){
    var windChill = (f=35.47 + 0.6215*temp-35.75*Math.pow(speed,0.16) + 0.4275*temp*Math.pow(speed, 0.16)).toFixed(2)
    console.log(windChill);
    document.getElementById("windChill").innerText = windChill;
  } 
  setWindChill(32, 3)
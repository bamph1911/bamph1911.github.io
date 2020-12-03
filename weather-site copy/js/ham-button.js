window.addEventListener("load", (event) => {
    // add code here to run when page loads
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector(".navigation");
  
    hambutton.addEventListener(
      "click",
      () => {
        mainnav.classList.toggle("responsive");
      },
      false
    );
  
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {
      if (window.innerWidth > 760) mainnav.classList.remove("responsive");
    };



    function showBanner(){
      const today = new Date();
      const banner = document.getElementById("banner");
        if (today.getDay() == 5){
          banner.style.display = "block";
        }else{
          banner.style.display = "none";
        }
      }





      showBanner();
    

  
    /*** Programming Notes **************************************
          Arrow Functions - es6 syntactically compact alternative to a regular function expression
          see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
          or https://www.w3schools.com/js/js_arrow_function.asp
        
          classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
          */
  });
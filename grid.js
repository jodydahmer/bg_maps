// Carousel Controls Thanks to Javascript and the DOM I understand what this means!!!!

var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
  };

//Made a two-dimensional array! 

let standardTimeIncrements = [
                 ['60', 'seconds'],
                 ['60','minutes'],
                 ['24','hours'],
                 ['7','days'],
                ['52','weeks' ]

];


let input = prompt("What's your average one-way commute to work in minutes? ");
let carCommuteTime = parseInt(input);

 //You have two commutes a day, one to work and one going home
    
let carCommuteDay = carCommuteTime * 2;
console.log(" You drive" + " " + carCommuteDay + " " + standardTimeIncrements[1][1] +" " +  "round-trip to work!");

// You don't work weekends, so you need to multiply by 5
let carCommuteWeek = carCommuteDay * 5;
console.log(" You drive" + " " + carCommuteWeek + " " + standardTimeIncrements[1][1] + " every week!");
console.log(" That's" + " " + carCommuteWeek/60 + " " + standardTimeIncrements[2][1] + "!");

//Hopefully you have vacation and sick days, so only working 50 weeks a year. 

let carCommuteYear = carCommuteWeek * 50;    
console.log(" You drive" + " " + carCommuteYear + " " + standardTimeIncrements[1][1] + " every year!");
console.log(" That's" + " " + carCommuteYear/60/24 + " " + standardTimeIncrements[3][1] + "!");

let hoursPerWeek = carCommuteWeek/60;
console.log( "Rounded up, you drive almost" + " " + Math.ceil(hoursPerWeek) + " " + standardTimeIncrements[2][1] + " " + "every week!");
let daysPerYear = Math.floor(carCommuteYear/60/24);
console.log( "Rounded down, you drive about" + " " + daysPerYear + " " + standardTimeIncrements[3][1] + " " + "every year!");


  function print(message) {
      document.write(message);
  };


      print("I am Javascript printed to the console! You drove" + "  " + carCommuteTime + "  " + standardTimeIncrements[1][1] + "!");
     console.log("You drove" + "  " + carCommuteTime + "  " + standardTimeIncrements[1][1] + "!");


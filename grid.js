// Trying to calculate total commute times for residents getting to work

let input = prompt("What's your average commute to work in minutes? ");
let carCommuteTime = parseInt(input);

 //You have two commutes a day, one to work and one going home
    
let carCommuteDay = carCommuteTime * 2;
console.log(carCommuteDay);

// You don't work weekends, so you need to multiply by 5
let carCommuteWeek = carCommuteDay * 5;
console.log(carCommuteWeek);

//Hopefully you have vacation days, so only working 50 weeks a year. 

let carCommuteYear = carCommuteWeek * 50;    
console.log(carCommuteYear);

let hoursPerWeek = carCommuteWeek/60;
console.log( Math.ceil(hoursPerWeek));
let daysPerYear = Math.floor(carCommuteYear/60/24);


console.log(daysPerYear);




//Current Problems : 
//How do I write the variables to the HTML?
//How to write variable in JS?
 let standardTimeIncrements = [
                 ['60', 'seconds'],
                 ['60','minutes'],
                 ['24','hours'],
                 ['7','days'],
                ['52','weeks' ]

];


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

  function print(message) {
      document.write(message);
  };


  print("You said you drove" + carCommuteTime + " " + standardTimeIncrements[1][1]);
  console.log("You said you drove" + " " + carCommuteTime + " " + standardTimeIncrements[1][1])
    // function printCommute (commute) {
    //     var minutesCommute = '<ol> ';
    //     for (var i=0 ; i < commute.length; i += 1) {
    //         minutesCommute += '<li>' + '<p> You drive for ' + carCommuteWeek[i] + 'every' +  + '</p>' + '</li>';
    //         printCommute += '<ol>';
    //         print(minutesCommute);
    //     };

//   html = "You got" + carCommuteTime + "going to work";
//   print(html);


//   console.log("You said you drive " + " " carCommuteTime + " " + standardTimeIncrements[1],[1] + "going to work")
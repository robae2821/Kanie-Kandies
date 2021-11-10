let humanYearInput = document.getElementsByClassName('human-year-input')[0]
let dogButton = document.querySelector('.convert-button')
let inputButton = document.querySelector('.input-test-button')

function calculatedogsYears() {
	// 1 human year is 7 dog years
	let humanYears = humanYearInput.value
	console.log('the user entered', humanYears)
  
	let dogAge = humanYears * 7
  dogAge = Math.round(dogAge)
  /* string interpolation */
  console.log(`The dog is ${dogAge} `)
  document.getElementById('dog-age').innerHTML = `The dog is ${dogAge}.`
}

dogButton.addEventListener('click', () => calculatedogsYears())




// get the current date
const today= new Date();
console.log(today);
// returnes the currente day in number form
const dayNumber= today.getDay();
console.log(dayNumber);
// storing my output location
const element=document.getElementById("message1");

// function special() {
//     if (dayNumber===1) {
//         return "1/2 off all oil";
// }
// else if(dayNumber===2){
//     return "2 for one treats" ;
// }
// else if(dayNumber===3){
//     return "Buy one get one free day";
// }
// else if(dayNumber===4){
//     return "Add a gummy";
// }
// else if(dayNumber===5){
//     return "Bring a friend";
// }
// else if(dayNumber===6){
//     return "Buy two edibles get one free";
// }
// else if(dayNumber===7){
//     return "Brunch and free samples";
// }
// else (element.classList.add("hideme"));
// }
// console.log("you got a" + special());
// element.innerHTML= "check out the special today 👀" + "</br>" + special();


let day;
switch (new Date().getDay()) {
  case 1:
    day = "Brunch and free samples";
    break;
  case 2:
    day = "1/2 off all oil";
    break;
  case 3:
    day = "2 for one treats";
    break;
  case 4:
    day = "buy one get one free";
    break;
  case 5:
    day = "add a gummy";
    break;
  case 6:
    day = "Bring a friend";
    break;
  case  7:
    day = "buy two edibles get one free";
}
document.getElementById("message1").innerHTML = `Today is ${day} ` ;
console.log("Today is " + day);

// The Grade Assigner
// Write a function 
// named assignGrade that:
// takes 1 argument, a number 
// score.
// returns a grade for the score, 
// either "A", "B", "C", "D", or "F".
// Call that function for a few different 
// scores and log the result to the 
// document or console to make sure it 
// works correctly. 
function assignGrade(score){
    if (score>=90){
       console.log("Wow👏Awsome You Get A")
    }
    else if (score>=80 && score<90) {
        console.log("Yeahh😍Excellent You Get B")
    }
    else if (score>=70 && score<80) {
        console.log("Oww✌Good You Get C")
    }
    else if (score>=60 && score<70) {
        console.log("Ohh😒You Get D")
    }
    else if (score>=50 && score<60) {
        console.log("Ohh🤦‍♀️You Get E") 
    }
    else if (score<50) {
        console.log("Oops🤦‍♂️You Get F") 
    }
    
}
assignGrade(45)
assignGrade(59)
assignGrade(69)
assignGrade(79)
assignGrade(89)
assignGrade(99)




// Array Literal
// we assign the array to a variable
const colors=['brown', 'pink', 'blue', 'teal', 'red']
const myAges=[10, 13, 16, 18, 21]
const compNums=[12>12, 9==='nine', 1==2, 'eight'==='EIGHT', 5>=5]
// JS keyword build-in javaScript methodes new Array()
var colors= new Array('browen', 'pink', 'blue', 'teal', 'red');
var myAges= new Array(10, 13, 16, 18, 21)

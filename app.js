// alerts message on the page
alert("you have to be 18 to enter this Site");
// ask a yes/no
// confirm("Are You Over 18?")
// give an Input. prompys an answer.
let age = prompt("How Old Are You?")
console.log("userage:", age)

function checkUserAge(age) {
    if (age >= 18) {
        console.log("user is over 18")
    } else {
        console.log("user is under 18")
        location.assign("https://www.youtube.com/watch?v=0d-SY36-_xY");
    }
}
checkUserAge(age)













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
const today = new Date();
console.log(today);
// returnes the currente day in number form
const dayNumber = today.getDay();
console.log(dayNumber);
// storing my output location
const element = document.getElementById("message1");

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
    case 7:
        day = "buy two edibles get one free";
}
document.getElementById("message1").innerHTML = `Today is ${day} `;
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
function assignGrade(score) {
    if (score >= 90) {
        console.log("Wow👏Awsome You Get A")
    }
    else if (score >= 80 && score < 90) {
        console.log("Yeahh😍Excellent You Get B")
    }
    else if (score >= 70 && score < 80) {
        console.log("Oww✌Good You Get C")
    }
    else if (score >= 60 && score < 70) {
        console.log("Ohh😒You Get D")
    }
    else if (score >= 50 && score < 60) {
        console.log("Ohh🤦‍♀️You Get E")
    }
    else if (score < 50) {
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
// const colors=['brown', 'pink', 'blue', 'teal', 'red']
// const myAges=[10, 13, 16, 18, 21]
// const compNums=[ 12>12, 9==='nine', 1==2, 'eight'==='EIGHT', 5>=5]
// // JS keyword build-in javaScript methodes new Array()
// var colors= new Array('browen', 'pink', 'blue', 'teal', 'red');
// var myAges= new Array(10, 13, 16, 18, 21)

// // JS constractor method

// const colors=[];
// colors[0]= 'brown';
// colors[1]= 'pink';
// colors[2]= 'teal';
// colors[3]= 'red';
// colors[4]= 'blue';

// create an array of at list 7 of your classmates's name
const className = [];
className[0] = 'Robel';
className[1] = 'Emily';
className[2] = 'Anthony';
className[3] = 'Arone';
className[4] = 'luz';
className[5] = 'Anna';
className[6] = 'Ali';
console.log(className);

// Access an Array
console.log(className.length);

// loop over an array//for loop
for (i = 0; i < className.length; i++) {
    console.log(className);
}
// Array Methodes
className.push('Ali');                //*adding an item to the end of an array
className.pop();                      //pop removes last item from array 
className.unshift('Ali');              //*unshift adds an items to the begining 
className.shift();                     //removes an item from the top of an array 
className.splice(2, 2, 'Ali');
console.log(className.indexOf('Ali'));  //find a spacific index




console.log(className);



// Array Assignments //Create an Array called "donuts" that list 7-10 different items
//1 Using a loop, iterate through this array and console.log all the donuts
const donutTypes = [];
donutTypes[0] = 'cake';
donutTypes[1] = 'Glazed';
donutTypes[2] = 'Powder';
donutTypes[3] = 'Eclair';
donutTypes[4] = 'Long John';
donutTypes[5] = 'chocolate';
donutTypes[6] = 'Holes';
console.log(donutTypes);

for (i = 0; i < donutTypes.length; i++) {
    console.log(donutTypes[i]);
}
//2 Write the command to remove the first donut fron the array
donutTypes.shift();
console.log(donutTypes);
//3 Write the command to remove the last donuts from the array
donutTypes.pop();
console.log(donutTypes);
//4 Write the command to add a new donut "lime zest" to the front of the array
donutTypes.unshift('lime zest');
console.log(donutTypes);
//5 Write the command to add another donut "lemon pie" to the end of the array
donutTypes.push('lemon pie');
console.log(donutTypes);
//6 Use either the join() or toString() method to convert an array to a string.
// const donutTypes = ["lime zest", "Glazed", "Powder", "Eclair", "Long John", "chocalate", "Lemon pie"];
let text = donutTypes.toString();
console.log(text);

//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
const citrus = donutTypes.slice(3, 6);
console.log(citrus);

//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donutTypes.indexOf('chocolate'));
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donutTypes.indexOf('Glazed'));
//10 **Using the splice method, remove one donut from the array and add another.
donutTypes.splice(2, 0, "Lemon", "Kiwi");
console.log(donutTypes);
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".

// const withSyed = [];
// withSyed[0] = 'Robel';
// withSyed[1] = 'Emily';
// withSyed[2] = 'Anthony';
// withSyed[3] = 'Arone';
// withSyed[4] = 'luz';
// withSyed[5] = 'Anna';
// withSyed[6] = 'Ali';
// withSyed[7] = 'Chirs';
// withSyed[8] = 'April';
// withSyed[9] = 'Shelby';
// console.log(withSyed);

// let str1 = withSyed;
// let str2 = donutTypes;
// let donuts = str1.concat(str2);
var withSyed = donuts.concat ("Bob");


console.log(donuts.concat("Bob"));



//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts() {
    document.getElementById("donuts").innerHTML=donuts;

}
getdonuts()

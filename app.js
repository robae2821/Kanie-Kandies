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

function special() {
    if (dayNumber===1) {
        return "1/2 off all oil";
}
else if(dayNumber===2){
    return "2 for one treats" ;
}
else if(dayNumber===3){
    return "Buy one get one free day";
}
else if(dayNumber===4){
    return "Add a gummy";
}
else if(dayNumber===5){
    return "Bring a friend";
}
else if(dayNumber===6){
    return "Buy two edibles get one free";
}
else if(dayNumber===7){
    return "Brunch and free samples";
}
else (element.classList.add("hideme"));
}
console.log("you got a" + special());
element.innerHTML= "check out the special today 👀" + "</br>" + special();


// let day;
// switch (new Date().getDay()) {
//     case 1:
//         day = "Brunch and free samples";
//         break;
//     case 2:
//         day = "1/2 off all oil";
//         break;
//     case 3:
//         day = "2 for one treats";
//         break;
//     case 4:
//         day = "buy one get one free";
//         break;
//     case 5:
//         day = "add a gummy";
//         break;
//     case 6:
//         day = "Bring a friend";
//         break;
//     case 7:
//         day = "buy two edibles get one free";
// }
// document.getElementById("message1").innerHTML = `Today is ${day} `;
// console.log("Today is " + day);






//dog CBD DOSAGE START
const smallDog = {
    oneQuarter: "1/4ml = 1.75mg",
    half: "1/2ml = 3.5mg",
    threeQuarter: "3/4ml = 5.25mg",
    oneML: "1ml = 7mg",
};

function smalDog () {
    var thisSmallDog = smallDog.oneQuarter + "<br>" + smallDog.half + "<br>" + smallDog.threeQuarter + "<br>" + smallDog.oneML;
    document.getElementById("myDosage").innerHTML = thisSmallDog;
};
function smalDogClear () {
    var thisSmallDogClear = "" ;
    document.getElementById("myDosage").innerHTML = thisSmallDogClear;
};

const mediumDog = {
    oneQuarter: "1/4ml = 4.25mg",
    half: "1/2ml = 8.5mg",
    threeQuarter: "3/4ml = 12.75mg",
    oneML: "1ml = 17mg",
};

function medDog () {
    var thisMedDog = mediumDog.oneQuarter + "<br>" + mediumDog.half + "<br>" + mediumDog.threeQuarter + "<br>" + mediumDog.oneML;
    document.getElementById("myDosageTwo").innerHTML = thisMedDog;
};
function medDogClear () {
    var thisMedDogClear = "";
    document.getElementById("myDosageTwo").innerHTML = thisMedDogClear;
};

const largeDog = {
    oneQuarter: "1/4ml = 6.75mg",
    half: "1/2ml = 13.5mg",
    threeQuarter: "3/4ml = 20.25mg",
    oneML: "1ml = 27mg",
};

function largDog () {
    var thisLargDog = largeDog.oneQuarter + "<br>" + largeDog.half + "<br>" + largeDog.threeQuarter + "<br>" + largeDog.oneML;
    document.getElementById("myDosageThree").innerHTML = thisLargDog;
};
function largDogClear () {
    var thisLargDogClear = "";
    document.getElementById("myDosageThree").innerHTML = thisLargDogClear;
};

//dog CBD DOSAGE END




// part 1
// create an array of image links (i did links, but its 
// best to store image locally)

const arrayCarousel = [
    "images/img.png",
    "images/img2.png", 
]

// part 2
// start the counter at 0 to delay the start
counter = 0

// part 3
// declar a function to display the images
function setImage() {

    document.getElementById("carousel-image").src= arrayCarousel[counter];
    // document.getElementById("carousel-image1").src = arrayCarousel[counter];
    // part 4
    // set the counter to start at 0 and go through the 
    // remainer of the image's length (%=remainer)

    counter = (counter + 1) % arrayCarousel.length;

}

// call the function with the setInterval timing method
// rotates the image every 2 (2000) seconds
setInterval(setImage, 2000);
// clearInterval(setImage, 5000);

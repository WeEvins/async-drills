// let randNum = generateNum();
// let randFour = multNum();


// function generateNum() {
//     let newNum = Math.floor(Math.random() * (101 - 1) + 1);
//     console.log(newNum);
// };

// function multNum() {
//     let timesFour = (generateNum() * 4);
//     console.log(timesFour);  // this line keeps giving me a NaN?
// };

// //this is working, but because of the NaN on line 12, its acting wonky
// setTimeout(() => {
//     console.log(multNum());
// }, 2000);  

//this prints as 'a word', 'fourth', 'thirds' then 'another'
//which makes sense because of how I have it coded.
//was this all I was supposed to do it? directions unclear.
function getWord() {
    console.log('a word');
        setTimeout(() => {
            console.log('another word');
        }, 3000);
        setTimeout(() => {
            console.log('thirds the werds');
        }, 2000);
        setTimeout(() => {
            console.log('fourth');
        }, 1000);
    }


getWord();


//number 6 under call backs is this mess here:
// function countdown(num, callback) {
    
// }

// function done() {
//     console.log('I am now done, and logging as such.');
// };

//START PROMISES PART

let b = 'true';
function err() {
    new Error(console.log('food machine broke'));
};

function orderingChickenSandwich() {
    if (b === true) {
        let myMeal = {
            sandwich: 'chicken',
            veggies: 'lettuce'
        };
        console.log(myMeal);
    } 
};
let myPromise = orderingChickenSandwich();

myPromise.then(() => {
    console.log(myMeal);
}, err(), {

});
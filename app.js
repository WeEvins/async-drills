let randNum = generateNum();
let randFour = multNum();

function generateNum() {
    let newNum = Math.floor(Math.random() * (101 - 1) + 1);
    console.log(newNum);
    return newNum;
};

function multNum() {
    let timesFour = (generateNum() * 4);
    console.log('logging timesFour:', timesFour);
};
setTimeout(() => {
    console.log(multNum());
}, 2000);

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

let b = true;

function orderFood() {
    orderingChickenSandwich()
        .then(() => {
            console.log(`has this worked yet?`);
        }, (err) => {
            console.log(err);
        });
};
function orderingChickenSandwich() {
    return new Promise((resolve, reject) => {
        if (b == true) {
            let tastey = {
                sandwich: 'chicken',
                veggies: 'lettuce'
            };
            resolve(console.log(`MMM. This ${tastey} is a tastey borger`));
        } else {
            let err = new Error(console.log('food machine broke'));
            reject(err);
        };
    })
};
orderFood();

// Chaining Promises start

function testMath() {
    return new Promise((resolve) => {
        console.log('starting testMath promise');
        setTimeout(() => {
            console.log('resolving testMath promise with 1');
            resolve(1);
        }, 2000);
    }).then((number) => {
        numTimesTwo = number * 2;
        console.log('testMath result times two is', numTimesTwo);
        return numTimesTwo;
    }).then((number) => {
        numTimesFour = number * 4;
        console.log('testMath comin\' in with the:', numTimesFour);
        return numTimesFour;
    }).then((number) => {
        numTimesSix = number * 6;
        console.log('times six!! give it up for time six!!!', numTimesSix);
    }
    )
};

testMath();

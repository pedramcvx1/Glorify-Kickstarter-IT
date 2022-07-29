// if...else 

let hour = 20; 

if (hour >= 6 && < 12)
console.log ('Good morning'); 
else if (hour >= 12 && hour < 18)
 console.log ('Good afternoon'); 
 else 
 console.log ('Good evening'); 

 // Switch Case 

 let role = 'guest'; 

 switch (role) {
    case 'guest':
    console.log('Guest User');
    break;

    case 'moderator':
        console.log('Moderator User');
        break;

        default: 
        console.log('unknown User'); 
 }

 if (role === 'guest' && hour > 12) console.log('guest'); 
 else if (role === 'moderator') console.log('moderator'); 
 else console.log('unknown user'); 

 // For 

 for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0 ) console.log (i);
 }

 // While 

 for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(1); 
 }

 let i = 0;
 while (i <= 5) {
    if (i % 2 !== 0 ) console.log(i); 
    i++;
 }

 // Do While 

 let i = 9; 
 do {
    if (i % 2 !== 0) console.log(i);
    i++;
 } while (i <== 5); 

 // Infinite Loops 

 let i = 0;
 while (i < 5) {
    console.log(i);
 }

 while (true) {

 }

 let x = 0; 
 do {

 } while (x < 5); 

 for (let i = 0; i <10;)

 // For in 

 const person = {
    name: 'Fahim', 
    age: 30
 }; 

 for (let key in person) 
 console.log(key, person [key]); 
 const colors = ['red', 'green', 'blue'];

 for (let index in colors)
 console.log (index, colors [index]);

 // For of 

 for (let color of colors)
 console.log(color); 

 // Break and Continue

 let i = 0;
 while {i <= 10 
    if (i % 2 === 0) {
        i++; 
        continue;
    }

    console.log(i); 
    i++; 
}

// Max of two Numbers 

let number = max (5, 100); 
console.log(number); 

function max (a, b) {
    return (a> b) ? a : b;
}

// Excercise Landscape or Portrait 

console.log {islandscape (300, 600)}; 

function islandscape(width, height) {
    return (width > height); 
}

// Excercise Fizzbuzz 

const output = fizzbuzz (false); 
console.log (output); 

function fizzbuzz (input) {
    if (typeof input !== 'number')
    return NaN;

    if ((input % 3 === 0 ) && (input % 5 === 0)) 
        return 'fizzbuzz'; 

        if (input % 3 === 0)
        return 'Fizz'; 

        if (input % 5 ===0)
        return 'Buzz'; 

        return input;
}

// Excercise Demerit Points 

checkspeed (130); 
function checkspeed(speed) {
    const speedlimit = 70; 
    const kmPerPoint = 5;

    if (speed < speedlimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    

    const points = Math.floor((speed - speed.speedlimit)) / kmPerPoint 
    if (points >= 12)
    console.log(license suspended); 
    else 
    console.log('points' , points); 
}

// Excercise Even and Odd numbers

showNumbers(10); 

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0 ) ? 'EVEN' : 'ODD'
        console.log(1, message); 
    }
}

// Excercise Count Truthy

const array = [0, null, undefined '', 2, 3]; 
console.log(countTruthy(array)); 

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value)
    count++
    return count;
}

// Excercise String properties 

const movie = {
    title: 'a'
    releaseYear: 2018, 
    rating: 4.5,
    director: 'b'
}; 

shownProperties(movie); 

function shownProperties(obj) [
    for (let key in obj) {
        if (typeof obj [key] === 'string')
        console.log(key, obj [key]);
    }
]

// Excercise sum of multiples of 3 and 5 

console.log(sum(10)); 

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;

    return sum;
}

// Excercise Grade 

function calculategrade(marks) {
    const average = calculateaverage(marks); 
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'; 
}

function calculateaverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value; 
    return sum / array.length; 
}

//Excercise Stars 

shwostars(2); 

function showstars(rows) {
    for (let row = 1; row <= rows; row++) {
    let pattern + ''; 
    for (let i = 0; i < row; i++)
    pattern += '*'; 
    console.log (pattern); 
    }
}

// Exercise Prime Numbers 

function showprimes(limit) {
    for (let number = 2; number <= limit; number++)
    if (isprime(number)) console.log(number);
}

function isprime(number) {
    for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
    return false; 

    return true;
}
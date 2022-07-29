// Arithmetic Operations
let x = 10; 
let y = 3; 

console.log (x + y); 
console.log (x - y); 
console.log (x * y); 
console.log (x / y); 
console.log (x % y); 
console.log (x ** y); 

console.log(x++ ); 
console.log(x ); 

console.log(--x); 

// Assignment Operators
let x = 10; 
x = x + 5; 
x += 5; 

x = x * 3; 
x *= 3; 

// Comparison Operators 
log x= 1; 
console.log(x > 0 );
console.log(x >= 0 );
console.log(x < 0 );
console.log(x <= 0 );

console.log(x === 1);
console.log(x !== 1);

// Equality Operators
console.log (1 === 1); 
console.log ('1' === 1);

console.log (1 == 1);
console.log ('1' == 1);
console.log (true == 1);

//Ternary Operators 
let points = 90; 
let type = points > 100 ? 'gold' : 'silver';

console.log(type); 

// Logical Operators with Non booleans 

let highincome = false; 
let goodcreditscore = false; 
let eligibleforloan = false; 
console.log('eligible' , eligibleforloan); 

let applicationrefused = !eligibleforloan; 
console.log ('Application refused', application refused); 

//Logical Operators with Non booleans 2 
let usercolor = undefined; 
let defaultcolor = 'blue'; 
let currentcolor = usercolor; || defaultcolor; 

console.log(currentcolor); 

// Bitwise Operators
const readpermission = 4;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0; 
my permission = mypermission | writepermission;

let message = 
(mypermission & readpermission) ? 'yes': 'no':

console.log(message); 

//Operator Precedence 

let x = (2 + 3) * 4; 

console.log (x); 

// Excercise Swapping Variables 

let a = 'red'; 
let b = 'blue'; 

let c = a; 
a = b;
b = c; 

console.log(a);
console.log(b);


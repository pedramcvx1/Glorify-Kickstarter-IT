console.log("This is a log from a dedicated JS file.")

/* Variables-
Store values of specific data types e.g. numbers, strings of characters */

var item;
var item,
    item2 ;

item= 5; 
item2= "Hello!";

/*Data types
5 primary - string, number, boolean, null, undefined
2 composite- arrays, objects */

var name = "John",
    age = 32,
    married = false,
    age = null,
    carModel;

/* Array
A list of values */

var list = ["John", "Marie", "Sander", 32 , false];
    list2 = []
    list3 = new Array(12, false);

/*
Methods:
push - adds an item to an array
pop - removes an item from an array
shift - remove an item from the start of an array
unshift - adds an item to start of an array
indexOf - finds the index of a specific item in an array
*/

/*
Objects 
Properties are an association between a name and a value e.g. colour=red
Properties can also have functions as values in which case those properties are called methods
Objects are collections of properties.
*/

var person = new Object();

person.name = "James";
person.age = 43;
person.height = 1.76;
person.married = true;  

person["name"]= "Kirk"

person.car = {};

person.car.make = "Honda";

var person = {
    name: "Adi",
    age: "30"
}

/*
Operators
Assignment operator assigns a value to its left operant based on the value of its right operant. The simplest is = operator.

Arithmetic operators- Addition, Subtraction, Multiplication, Division
increment operator- adds 1 to its operant x++ ++x x-- --x
negation
concatenation

Comparison Operator- compares operants and returns a boolean i.e true or false =, ==, ===, < > 

Logical operators- x&&y x||y !x
*/

/* If Else Statements */
var age = 13;

if (age<20) {
    console.log('Teenager');
} else if (age >=20 && age < 70){
    console.log('A young man');
} else{
    console.log('Not so young anymore');
}

if (age > 20) {
    console.log('Not a teen anymore');
} else {
    console.log('Teen');
}

age > 20 ? console.log('Not a teen anymore') :console.log('Teen');

/* condition ? val1 : val2 */

/*Loops
Executes code repeatedly either a set number of times or until certain conditon is met
*/

/* for */
var names = ["George", "Margaret", "Sean"];

for (var x = 1; x <= 10; x++) {
    console.log(x);
}

for (var y = 0; y < names.length; y++) {
    console.log(names[y]);
}

/* do while */

var x = 0;

do {
    console.log(names[x]);
    x++;

} while(x < names.length);

do {
    console.log(x);
} while(x > 0)

 /* while */
while (x > 5) {
    console.log(x++);
}
/* Functions */
function printToConsole(message) {
    console.log(message);
}

printToConsole("Hello!");


function add(val1, val2) {
   return val1 + val2;
}

console.log(add(45,2));

var square = function(number) {
    return number * number;
}
console.log(square(2));

/* Selectors
 Used to manipulate the DOM and gain access to all its elements */

/* Events
events are actually happening on the HTML side
All you can do in JS is listen to these events and react accordingly */





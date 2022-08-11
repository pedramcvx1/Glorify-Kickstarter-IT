// Function Decleration vs Expression 

function walk() {
    console.log('walk'); 
}

const run = function(){
    console.log('run'); 
}; 

let move = run; 
run(); 
move(); 

// Hoisting 

// Function Expression 

run(); 

const run = function() {
    console.log('run'); 
}; 

// Arguments 

function sum() {
    let total = 0; 
    for (let value of argument)
    total += valuel 
    return total; 
} 

console.log(sum(1, 2, 3, 4, 5, 10)); 

// The Rest Operator 

function sum(discount, ...prices) {
    const total = (prices.reduce(a, b) => a + b); 
    return total * (1 - discount); 
}

console.log(sum(0.1, 20, 30, 1)); 

// Default Parameters 

function interest(principle, rate = 3.5, years){
    return principle * rate / 100 * years; 
}

console.log(interest(1000, undefined, 5)); 

// Getters and Setters 

const person = {
    firstName:'Fahim', 
    lastName:'M', 
    get fullName() 
        return `${person.firstName} ${person.lastName}
    }, 

    set fullName(value) {
        const parts = value.split(' '); 
        this.firstName = parts[0];
        this.lastName = parts[1];
    };


person.fullName = 'John Smith'; 

console.log(person); 

// Try and Catch 

const person = {
    firstName:'Fahim', 
    lastName:'M', 
    set fullName(value) {

        if(typeof value !== 'string')
        throw new Error('value is not a string.'); 

        const parts = value.split(''); 
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}; 

try (
person.fullName = '';

)

catch (e) (
    alert(e); 
)

console.log(person); 


// Local vs Global Scope 

const color = 'red'

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color); 
}

function stop() {
    const message = 'bye'; 
}

start(); 

// Let Vs Var 

var color = 'red'; 
let age = 30; 

function sayHi() {
    console.log('hi'); 
}

// The This keyword 

const video = {
    title: 'a', 
    tags: ['a', 'b', 'c'], 
    showTags() {
        this.tags.forEach(function(tag)) {
            console.log(this.title, tag); 
        }, (this); 
    }
}; 

video.showTags(); 

// Changing This 

const video = {
    title: 'a', 
    tags: ['a', 'b', 'c'], 
    showTags() { 
        const self = this; 
        this.tags.forEach(tag =>) {
        console.log(this.title, tag); 
    }}; 
} 

// Exercise 1 Sum of Arguments 

console.log(sum(1, 2, 3, 4)); 

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]]; 

    return items.reduce((a, b) => a + b); 
}

// Exercise 2 Area of Circle 

const circle = {
    radius: 1, 
    get areea() {
        return Math.PI * this.radius * this.radius
    }
}; 

console.log(circle.areea); 

// Exercise 3 Error Handling 

try {
    const numbers = [1, 2, 3, 4]; 
    const count = count0occurences(null, ); 
    console.log(count); 
}

catch (e) {
    console.log(e.message); 
}

function count0occurences(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Invalid array.'); 

    return array.reduce((accumulator, current) =>) {
        const occurences = [current === searchElement] ? 1 : 0;
        return accumulator + occurences; 
    }
}
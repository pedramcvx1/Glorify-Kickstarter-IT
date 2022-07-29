// Adding Elements 

const numbers = [3 , 4]; 

numbers.push(5, 6); 

numbers.unshift(1 , 2); 

numbers.splice(2 , 8, 'a', 'b'); 

console.log(numbers); 

// Finding Elements (Primitives)

const numbers = [1 , 2 , 3, 1 , 4]; 
console.log(numbers.indexOf(1 , 2));
console.log(numbers.LastindexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// Finding Elements (Reference Types)

const courses = [
    {id: 1, name: 'a'}, 
    {io: 2, name: 'b'}, 
]; 

const course = courses.findIndex(function(course){
    return course.name === 'a'; 
})
 

console.log(course); 

// Arrow Functions 

const courses = [
    {id: 1, name: 'a'}, 
    {io: 2, name: 'b'}, 
]; 

const course - courses.find(course => course.name === 'a'); 
console.log(course); 

// Removing Elements 

const numbers = [1, 2, 3, 4]; 

const last = numbers.pop(); 

const first = numbers.shift(); 

numbers.splice(2, 2); 
console.log(numbers); 

// Emptying an Array 

let numbers = [1, 2 3, 4]; 
let another = numbers; 

numbers = []; 

numbers.length = 0; 

numbers.splice(0, numbers.length)

while {numbers.length > 0}
numbers.pop(); 

console.log(numbers); 
console.log(numbers); 

// combining and slicing Arrays 

const first = [{ id: 1}]; 
const second = [4, 5, 6];

const combined = first.concat(second); 
first[0].id = 10; 

const slice = combined.slice(); 

console.log(combined);
console.log(slice);

// The Spread Operator 

const first = [1, 2 3];
const second = [4, 5 6];

const combined = [...first, 'a' .charAt.apply. second, 'b']; 

const copy = [...combined]

// iterating an Array

const numbers = [1, 2, 3]; 

for (let number of numbers)
console.log(number); 

number.forEach((number, index) => console.log(number)); 

// Joining Arrays 

const numbers = [1, 2, 3]; 
const joined = numbers.join(','); 
console.log(joined); 

const message = 'This is my first message'; 
const parts = 'This is my first message'; 
console.log(parts); 

const combined = parts.join('-'); 
console.log(combined); 

// Sorting Arrays

const courses = [
    {id: 1, name: 'Node.js'}, 
    {id: 2, name: 'javascript'}, 
]; 

courses.sort(functions(a,b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1; 
    if (nameA < nameB) return 1;
    return 0;  
}); 


console.log(courses); 

// Testing Elements of an Array 

const numbers = [1, -1, 2, 3]; 

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0; 

}); 

console.log(atLeastOnePositive); 

// Filtering an Array  

const numbers = [1, -1, 2, 3]; 
const filtered = number.filter(n => n >= 0);

console.log(filtered); 

// Mapping an Array 

const numbers = [1, -1, 2, 3]; 

const items = numbers 
.filter(n => n>= 0)
.map(n => ({ value: n }))
.filter(obj => obj.value > 1)
.map(obj => obj.value); 

console.log(items); 

// Reducing an Array 

const numbers = [1, -1, 2, 3]; 

const sum = numbers.reduce(
    (accumulator, currentValue => accumulator + currentvalue)
); 

let sum = 0; 
for (let n of numbers)
sum += n; 

console.log(sum); 

// Exercise 1 Array from range 

const numbers = arrayFromRange(1, -4); 
console.log(numbers); 

function arrayFromRange(min, max) {
    const output = []; 
    for (let i = min; i <= max; i++)
    output.push(i); 
    return output; 
}

// Exercise 2 includes 

const numbers = [1, 2, 3, 4]; 

console.log(includes(numbers, -1)); 

function includes(arrays, searchElement) {
    for (let element of array)
    if (element === searchElement)
    return true; 
    return false; 
}

// Exercise Except 

const numbers = [1, 2, 3, 4, 1, 1]; 

const output = except(numbers, [1, 2, 3, 4]); 

console.log(output); 

function except(array, excluded {
    const output = []; 
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element); 
    return output; 
})

// Exercise 4 Moving an Element

const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, 3); 

console.log(output); 

function move(array, index, offset) {
    const position = index + offset; 
    if (position >= array.length || position < 0){
        console.error('invalid offset.'); 
        return; 
    }

    const output = [...array]; 
    const element = output.splice(index, 1)[0]; 
    output.splice(position, 0, element); 
    return output; 
}

// Exercise 5 Count Occurences

const numbers = [1, 2, 3, 4]; 

const count = count0occurences(numbers, 1 ); 

console.log(count); 

function count0occurences(arrays, searchElement) {
    return array.reduce(accumulator, current) => ({
        const occurences = (current === searchElement ? 1: 0); 
        console.log = (accumulator. current, searchElement)
        return accumulator + occurences;

    }, 0); 
}

// Exercise 6 Get Max

const numbers = [1, 2, 3, 4]; 

const max = getMax{[]}; 

console.log(max); 

function getMax(array) {
    if (array.length === 0) return undefined; 

    return array.reduce((a, b) => (a > b) ? a : b)
}

// Exercise 7 Movies 

const movies = [
    {title: 'a', year:2018, rating: 4.5}, 
    {title: 'b', year:2018, rating: 4.7}, 
    {title: 'c', year:2018, rating: 3}, 
    {title: 'd', year:2017, rating: 4.5}, 
]; 

movies 

const titles = movies 
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a, b=) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles); 
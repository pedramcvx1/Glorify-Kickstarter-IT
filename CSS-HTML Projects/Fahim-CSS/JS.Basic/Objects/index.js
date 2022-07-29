// Basics 

const circle = {
    radius: 1, 
    location: {
        x:1
        y:2
    },
    isVisible: true, 
    draw: function () {
        console.log('draw');
    }
}; 

circle.draw(); 

// Factory Functions 

function createcircle(raidus) {
    return {
        radius, 
        draw() {
            console.log('draw'); 
        }
    };
}

const circle1 = createcircle(1); 
console.log(circle1); 

const circle2 = createcircle(2); 
console.log(circle2); 

// Constructor Functions 

draw() {
    console.log('draw'); 
}
const mycircle = createcircle(1); 

function circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new circle (1); 

// Dynamic Nature of Objects 

const circle = {
    radius: 1 
}; 

circle.color = 'yellow'
circle.draw = function() {}

delete circle.color;
delete.circle.draw;

console.log(circle); 

// Constructor Property 

new string(); // '' , "", `` 
new Boolean(); // true, false
new Number(); // 1 , 2, 3 ...

// Functions are Objects 

function circle(radius) {
    this.radius = radius; 
    this.draw = function() {
        console.log('draw'); 
    }
}

circle.call({}, 1); 
circle.apply({}, [1 , 2 , 3]); 

const another = new circle(1)

// Value vs Reference Types 

let obj = {value: 10 }: 

function increase (obj) {
    obj.value++; 

}

increase(obj); 
console.log(obj);

// Enumerating Properties of an object 

const circle = {
    radius: 1, 
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]);

for (let key of object.keys (circle))
console.log(key); 

for (let entry of object.entries (circle))
console.log(entry); 

if ('color' in circle) console.log('yes'); 

// Cloning an object 

const circle = {
    radius: 1, 
    draw() {
        console.log('draw');
    }
};

const another = object.assign({}, circle); 
const another = {...circle}; 

console.log(another); 

// Garbage Collection 

let circle = { };
console.log(circle);  

// String

const message = 'This is my\n first message'; 
const another = new string('Hi'); 

// Template Literals 

const name = 'John'; 
const message = 'Hi' + name + ',\n'; 

const another = 
`Hi $(name) $(2+3), 

Thank you for joining my mailing list 

Regards, 

Fahim`;  


// Date 

const now = new Date(); 
const date1 = new Date('May 11 2018 09:00'); 
const date2 = new Date(2018, 4, 11, 9); 

now.setFullYear(2017); 

// Excercise 1 Address Object 

let address = {
    street: 'a',
    city: 'b',
    zipcode: 'c'
}; 

function showaddress(address) (
    for (let key in address)
    console.log(key, address [Key]); 
) 

showaddress(address); 

// Exercise 2 Factory and Constructor Function 

console.log(address); 

function createaddress(street , city, zipcode) {
    return{
        street, 
        city,
        zipcode
    }; 
}

function address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Exercise 3 object Equality 

let address1 = new address('a' , 'b' , 'c'); 
let address2 = new address('a' , 'b' , 'c'); 
let address3 = address1; 

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) (
    return address1.street === address2.street &&
    address1.city === address2.street && 
    address1.zipcode === address2.zipcode;
)

// Excercise 4 Blog post object 

let post = {
    title: 'a'
    body: 'b'
    author: 'c'
    views: 10 
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ], 
    isLive: true 
}; 

console.log(post); 

// Excercise 5 Consturctor Functions 

let post = new post ('a', 'b' , 'c'); 

console.log(post)

function post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// Price Range objects 

let priceRanges = [
    {label: '$' ,  tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10}, 
    {label: '$$' , tooltip: 'Inexpensive', minPerPerson: 11, maxPerPerson: 20}, 
    {label: '$$$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 50}, 
]; 

let restaurants = [
    {averagePerPerson: 5 }
]


// primitive / non-primitive datatype (call by reference / call by valye)

// Primitive 7 category
/*
(call by value - copied)
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt

*/
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined; let outsideTemp = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);

const bigNumber = 123123123128387123n;

// ** Dynamically typed 

// Reference Data Type
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObject = {
    name : "hitesh",
    age : 22,
    
} // datatype can be anything.

// Function

const myFunction = function(){
    console.log("Inside from my function");
}
myFunction();

console.log(typeof(myFunction));
console.log(typeof(outsideTemp));

console.clear();

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"; // Primitive

let anotherName = myYoutubename;

anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne;
userTwo['email'] = "testing";
userTwo.upi = "We don't use it here";
console.log(userOne);
// console.table([userOne]);
const score = 400;

const balance = new Number(400);
const otherNumber = 4023.231233
console.log(typeof balance);
console.log(typeof score);
console.log(balance.toString().length);
console.log(otherNumber.toPrecision(3));
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


// Maths
console.clear();
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.random() * 10 + 1); // 0 to 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
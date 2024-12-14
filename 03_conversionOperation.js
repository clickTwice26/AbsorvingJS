let score = 33; // number
score = "33"; // string
score = "33abc" // NaN
score = null; // after Number(null) => 0
score = undefined; // NaN
score = true;// 1 or 0
score = "hitesh"; //NaN
// print(score);

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN not a number



let isLoggedIn = ""; // true
// empty string | zero ==  false;
// everyother things == true;
isLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);

let someNumber = 33;

someNumber = String(someNumber);
console.log(typeof someNumber);
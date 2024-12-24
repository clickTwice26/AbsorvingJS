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

console.log("--------------------------")
// ******** Operations ********

let value = 3;
let negValue = -value;
console.log(negValue)

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3);


// there are no real life application of this
// only interview question -> not practically used
console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2 + 2); // 12
console.log(1 + 2 + "2"); // 32

// ECMA ToPrimitive guideline
    // -> which value type coming first, will be get priority first


console.log("Confusion Code: Just to know");
console.log(+true); // 1
console.log(1+true); // 2
console.log(+"");
console.log("Operator presidence");

console.clear();
let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log(num1);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
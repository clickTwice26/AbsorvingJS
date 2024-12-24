const myArray = [1, 2, 3];

myArray.push(10);
myArray.pop();

myArray.unshift(2,3); // insert at the start
myArray.shift(); // pop()
console.log(myArray)
console.log(myArray.includes(9)); // return boolean              
console.log(myArray.indexOf(9)); // return positive or negative
console.log(myArray.indexOf(3))


const newArr = myArray.join(" ")
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.clear();
console.log("A ", myArray);
const myn1 = myArray.slice(1, 3); 
console.log(myn1); 
console.log("B ", myArray); 

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("C ", myn2);
console.log("Original Array: ", myArray);
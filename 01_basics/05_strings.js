const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount);// not applicable for modern day

// modern way of syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


console.clear();
const gameName = new String("Hitesh Hc");

console.log(gameName.toString());

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toLowerCase());    
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // passes position
console.log(gameName.indexOf("t"));

console.clear()
// Slicing

const newString = gameName.substring(0, 4); // 0,1,2,3
const anotherString = gameName.slice(0, 4);
console.log(newString);
console.log(anotherString);
const newStringOne = "  hello  ";
console.log(newStringOne.trim())

let url = "https://hitesh.com/hitesh%20choudhary";
url = url.replace("%20", "-");
console.log(url.includes('sundar')); // true or false
console.log(url);
console.log(url.split("/"));
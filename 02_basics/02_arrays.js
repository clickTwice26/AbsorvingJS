const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];






// marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3]);
console.clear()
const allHeroes = marvel_heroes.concat(dc_heroes); // returns new array
const spreadHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes);
console.log(spreadHeroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real_another_array = anotherArray.flat();
console.log(real_another_array);
console.log(real_another_array.flat(Infinity));
// real_another_array = real_another_array.flat();

// console.log(real_another_array); 
console.clear();

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "hitesh"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23); // month start from 0
console.log(myCreatedDate.toDateString());
console.clear()

let newDate = new Date();

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);

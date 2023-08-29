let myDate = new Date();

console.log(myDate);

console.log(myDate.toLocaleString());

console.log(myDate.toString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,1);
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toString());

const myCreatedDate2 = new Date("2023-01-01");
console.log(myCreatedDate2.toString());

console.log(myCreatedDate2.toLocaleDateString());


let newDate = new Date();
console.log(newDate.getDate());

console.log(newDate.getMonth());

console.log(newDate.getTime());

console.log(newDate.getDay());



const milliseconds = 76329456;

const seconds = Math.floor((milliseconds / 1000) % 60);

const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

console.log(hours);

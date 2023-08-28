// Number
const Score = 400;
const balance = new Number(100);

console.log(typeof Score);
console.log(typeof balance);

console.log(balance.toString().length);

console.log(balance.toFixed(3));


const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


// Maths

console.log(Math.abs(-4));

console.log(Math.round(4.3));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.6));


console.log(Math.min(4,3,6,8));

console.log(Math.max(4,3,6,8));


console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.random() * 100);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));
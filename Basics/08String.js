const name = "Maaz";
const age = 23;

console.log(typeof name);

// String Concatenation
console.log("Hello my name is " + name  + " " + "and I am " + age);

// String Interpolation
console.log(`Hello my is name ${name} and I am ${age}`);


// Another way to declare the string
// const gameName = new String("Maaz");
// console.log(typeof gameName);

const FullName = "Syed Maaz";

// length Property
console.log(FullName.length);


// String Methods

console.log(FullName.toUpperCase());  // UpperCase kar dega
// Original Change nahi hoga


console.log(FullName.charAt(0));


console.log(FullName.indexOf('a'));


const FullNaam = FullName.substring(0,4);
console.log(FullNaam);

console.log(FullNaam.slice(-8,4));

const nameOne = "    Maaz      "
console.log(nameOne.trim());

const url = "https://www.facebook.com";
console.log(url.replace('facebook','youtube'));
console.log(url); // Original change nahi hoga

console.log(url.includes('facebook'));

let strName = "Syed-Maaz-Siraj";
console.log(strName.split("-"));

// Read Docs Once
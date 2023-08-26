// Primitive
// 7 Types of Data Types
// String
// Number
// Null
// Boolean
// Symbol
// BigInt
// Undefined

const id = Symbol('123');
console.log(typeof id);
console.log(id);

// Non - Primitive (Reference)
// 1 Array
// 2 Objects
// 3 Functions
let Heros = ["Shaktiman","Naagraaj","Dogra"];
console.log(typeof Heros);

let Obj = {
    name:"Syed Maaz",
    age:23
}
console.log(typeof Obj);

let myFynction = () => {
    console.log("Hii");
}

console.log(typeof myFynction); // Function(Object Function)
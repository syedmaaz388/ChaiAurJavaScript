// Stack (Primitive Data Types)

let myname = "Maaz";
let Box = myname;
Box = "Syed Maaz";
console.log(Box);
console.log(myname);

// Heap (Non - Primitive)
let UserOne = {
    name:"Syed Maaz",
    age:23
}

let UserTwo = UserOne;
UserTwo.name = "Syed Maaz Siraj";
console.log(UserOne);
console.log(UserTwo);
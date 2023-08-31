// Objects ko declare karne ke 2 Tarike hai
// literals
// Constructor

// Singleton - Constructor se jab banao gai tab single ton banega

// Objects Literals

const JsUser = {
    name:"Syed Maaz",
    age:23,
    location:"Jhansi",
    email:"maaz@google.com",
    isLoggedIn:false,
    lastlOGIN:["Monday","Saturday"]
}
console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser.age);
console.log(JsUser.location);
console.log(JsUser.isLoggedIn);
console.log(JsUser.lastlOGIN);

// or
console.log(JsUser["name"]);
console.log(JsUser["isLoggedIn"])
console.log(JsUser["location"]);



// Update
JsUser.email = "Maaz@gmail.com";
console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Frands");
}
console.log(JsUser.greeting());
JsUser.age = 24;
console.log(JsUser);
Object.freeze(JsUser);

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
// Freezing an object  is the highest integrity level that JavaScript provides.

JsUser.age = 25;
console.log(JsUser);

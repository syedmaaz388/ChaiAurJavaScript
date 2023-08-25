let age = 23
console.log(typeof age);
let StrAge = String(age);
console.log(StrAge);
console.log(typeof StrAge);

// let age = "33abc" - NaN Ho jaaega
let age2 = "33";
console.log(typeof (Number(age2)));  // String to Number

let numnull = null;
console.log(typeof numnull);

// "33" - 33
// "12abc" - NaN

let boolnum = 1;
let BooleanIsLoggedIn = Boolean(boolnum);
console.log(BooleanIsLoggedIn);
let boolnum2 = 0;
let BooleanIsLoggedIn2 = Boolean(boolnum2);
console.log(BooleanIsLoggedIn2);
let boolnum3 = 2;
let BooleanIsLoggedIn3 = Boolean(boolnum3);
console.log(BooleanIsLoggedIn3);

// true - 1
// false - 0
// "" - false
// "Hi" - true


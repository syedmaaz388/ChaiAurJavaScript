// if

// if(condition){
//     console.log("This will run");
// }

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("Give access to user");
}

// Comparision

// >
// <
// <=
// >=
// !=
// ==
// ===

if(3 != 2){
    console.log("This will run");
}

const temperature = 51;
if(temperature < 50){
    console.log("Less than 50");
}else{
    console.log("Greater than 50");
}

const temperatureTwo = 41;
if(temperatureTwo > 50){
    console.log("Greater than 50");
}else{
    console.log("Less than 50");
}


const score = 200;
if(score > 100){
    const power = "Fly";
    console.log(`User power: ${power}` );
}
// console.log(`User power: ${power}`); Error - power is not defined

// Short Hand
const balance = 1000;
if(balance > 500) console.log("Test");

// Nesting

if(balance < 500){
    console.log("500");
}else if(balance < 750){
    console.log("750");
}else if(balance < 900){
    console.log("Less than 950");
}else{
    console.log("Less than 1200");
}


const UserLoggedIn = true;
const DebitCard = true;

if(UserLoggedIn && DebitCard){
    console.log("Allow to Buy The Course");
}

const LoggedInFromUser = false;
const LoggedInFromEmail = true;
if(LoggedInFromUser || LoggedInFromEmail){
    console.log("User Logged In");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1); -> 5

val1 = null ?? 10
console.log(val1);

let val2;
val2 = undefined ?? 15;
console.log(val2);

// Ternary Operator

// condition ? true : false 

const IceTeaPrice = 100;
IceTeaPrice  >= 80 ? console.log("Less than 80") : console.log("More than 80");
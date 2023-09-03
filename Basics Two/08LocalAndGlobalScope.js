// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// Global variables can be accessed and modified anywhere in the program. Local variables cannot be accessed outside the function declaration.
let aa = 30;
var  bb = 40;
const cc = 50;

{
    let aa = 100;
    var bb = 200;
    const cc = 300;
    console.log(aa);
    console.log(bb);
    console.log(cc);
}
console.log(aa);
console.log(bb);
console.log(cc);


// The difference between let and var is in the scope of the variables they create: Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.
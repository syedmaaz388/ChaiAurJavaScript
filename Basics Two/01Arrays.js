const myArr = [0,1,2,3,4,5];
console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);

const myHeros = ["Ironman","Spiderman","Captain America"];

// Length Property
console.log(myHeros.length);

// Push Method
myHeros.push("Thor");
console.log(myHeros);

// Pop Method
myHeros.pop();
console.log(myHeros);

// unshift 
myHeros.unshift("Black Panther");
console.log(myHeros);

// Shift
myHeros.shift();
console.log(myHeros);

// includes
console.log(myHeros.includes("Ironman"));

// indexof
console.log(myHeros.indexOf("Spiderman"));

// join
const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);


// Slice
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);

// Splice
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
fruits01.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits01);

fruits01.splice(2,2);
console.log(fruits01);

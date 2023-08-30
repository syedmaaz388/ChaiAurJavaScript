const Marvels_heros = ["Thor","Spiderman","Ironman"];
console.log(Marvels_heros)
const Dc_Heros = ["Flash","Batman","Superman"];

// Marvels_heros.push(Dc_Heros);
// console.log(Marvels_heros);

// console.log(Marvels_heros[3][1]);

// Concat
// const M = Marvels_heros.concat(Dc_Heros);
// console.log(M);

// Spread Operator
// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
const all_new_heros = [...Marvels_heros,...Dc_Heros];
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


// Important
console.log(Array.isArray("Syed Maaz"));

console.log(Array.from("Syed Maaz"));

console.log(Array.from({name:"Syed Maaz"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
let ApnaArray =Array.of(score1,score2,score3);
console.log(ApnaArray);
console.log(typeof ApnaArray);
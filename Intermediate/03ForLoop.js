// For Loop

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//     const elem = i;
//     if(elem == 5){
//         console.log("5 is best");
//     }
//     console.log(elem);
// }

// Print 1 to 10 table
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i + " * " + j + "=" + i * j);
    }
}

// let myArray = ["Flash","Batman","Superman"];
// for(let index = 0; index < myArray.length; index++){
//     console.log(myArray[index]);
// }

// Break And Continue

for(let i = 1; i <= 10; i++){
   if(i == 5){
    break
   }
   console.log(i);
}
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue
       }
       console.log(i);
}
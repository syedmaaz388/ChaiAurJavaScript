// for of
// const arr = [1,2,3,4,5];
// for(const item of arr){
//     console.log(item);
// }

// const myStr = "HelloWorld";
// for(const greet of myStr){
//     console.log(greet)
// }

// Maps
// const map = new Map()
// map.set('IN','INDIA')
// map.set('USA','United State of America')
// map.set('SA','Saudi Aribia')
// map.set('IN','INDIA')
// console.log(map);
// for(const key of map){
//     console.log(key);
// }

// const myObject = {
//     Js:'JavaScript',
//     Cpp:'C++',
//     rb:'ruby',
//     swift:'Swift by Apple'
// }

// for(const key in myObject){
//     console.log(key);
// }
// for(const key in myObject){
//     console.log(myObject);
// }
// for(const key in myObject){
//     console.log(myObject[key]);
// }


// const Programming = ["JavaScript",'Ruby','Python','Java','Cpp'];
// for(const value in Programming){
//     console.log(value);
// }

// for(const val in Programming){
//     console.log(Programming[val]);
// }

// For Each Loop

// const Coding = ['JavaScript','Cpp','C','Java','Python'];
// Coding.forEach(function(i){
//     console.log(i);
// })

// Coding.forEach((i) => {
//     console.log(i);
// })

// Coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        language:'Js',
        languageName:'JavaScript'
    },
    {
        language:'Java',
        languageName:'Java'
    },
    {
        language:'Cpp',
        languageName:'C++'
    }
]
myCoding.forEach((item) => {
    console.log(item.language);
    console.log(item.languageName);
})

// Filter 

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr  = arr.filter((a) => a % 2 == 0);
// console.log(newArr);

// Yahi Cheez for each mai karo
// const newArr2 = [];
// arr.forEach((e) => {
//     if(e % 2 == 0){
//         newArr2.push(e)
//     }
// })
// console.log(newArr2)

const books = [
    {
        title:"Book One",
        Genere:"Fiction",
        Publish:1981,
        Edition:2004
    },
    {
        title:"Book Two",
        Genere:"Science",
        Publish:1989,
        Edition:2015
    },
    {
        title:"Book Three",
        Genere:"History",
        Publish:1991,
        Edition:2005
    },
    {
        title:"Book Four",
        Genere:"Science",
        Publish:1988,
        Edition:2014
    },
    {
        title:"Book Five",
        Genere:"History",
        Publish:1999,
        Edition:2012
    },
    {
        title:"Book Siz",
        Genere:"Fiction",
        Publish:1990,
        Edition:2000
    }
]

// let User = books.filter((bk) => (
//     bk.Genere === 'History' && bk.Publish >= 1995
// ))
// console.log(User);

// let User2 = books.filter((bk) => {
//     return bk.Edition >= 2010
// })
// console.log(User2);

// // Map  
// const arrays = [1,2,3,4,5,6,7,8,9,10]
// const newNum = arrays.map((num) => (
//     num * 10
// ))
// console.log(newNum);

// Chaining
const arr  = [1,2,3,4,5,6,7,8,9,10];
const newNum = arr.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 10)
console.log(newNum);

// Reduce
const Array01 = [1,2,3,4,5];
const initialValue = 0;
const sumWitchInitial = Array01.reduce((accum,current) => (accum + current),initialValue)
console.log(sumWitchInitial);

const myNums = [1,2,3]
const myTotal = myNums.reduce((acc,curr) => (acc + curr),0)
console.log(myTotal);

const ShoppingCart = [
    {
    ItemName:"Js Course",
    Price:299
},
{
    ItemName:"React",
    Price:499
},
{
    ItemName:"NextJs",
    Price:399
}
]
const totalPrice = ShoppingCart.reduce((acc,item) => (acc + item.Price),0)
console.log(totalPrice)
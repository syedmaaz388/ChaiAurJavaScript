// const user = {
//     username:"Maaz",
//     price:999,
    
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
    
// }
// user.welcomeMessage();
// user.username = "Syed Maaz";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Maaz";
//     console.log(this);
// }
// chai();

// const chai = function(){
//     let username = "Maaz";
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "Maaz";
//     console.log(this.username);
// }
// chai();

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(5,5));

const addTwo01 = (num1,num2) => (num1 + num2);
console.log(addTwo01(10,10));


const name = () => ({username:"Maaz"});
console.log(name()); 
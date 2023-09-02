function sayHello() {
      console.log("Hello Maaz");
}
sayHello();
console.log(typeof sayHello);

function addTwoNumber(number1,number2){
    let result = number1 + number2
    console.log(result)
}
addTwoNumber(5,5)
console.log(typeof result);


function addTwoNumber02(num1 = 5,num2 = 5){
    let result = num1 + num2;
    return result;
}
console.log(addTwoNumber02())
console.log(addTwoNumber02(15,5));


function greetings(name = "Maaz"){
    return `${name} is my name`;
}
console.log(greetings());
console.log(greetings("Syed Maaz"))


function loginUser(username){
    if(username === undefined){
        return `Username Undefined`
    }
    return `${username} is Username`
}
console.log(loginUser());
console.log(loginUser("Syed Maaz"));

function loginUser02(username){
    if(!username){
        return `Username Undefined`
    }
    return `${username} is UserName`;
}
console.log(loginUser02());
console.log(loginUser02("Syed Maaz"));

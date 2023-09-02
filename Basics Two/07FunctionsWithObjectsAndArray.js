function addNumber(...num){
    return num;
}
console.log(addNumber(120,112,222,322,142,25,27));


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username:"Syed Maaz",
    Profile:"Developer"
}
function handleObject(anyObject){
    console.log(`Name  is ${anyObject.username} and I am ${anyObject.Profile}`);
}
handleObject(user);
handleObject({
    username:"Syed Maaz",
    Profile:"Full Stack Developer"
})

const myNewArray = [200,400,100,600]

function handleArray(value){
    return value[1];
}
console.log(handleArray(myNewArray));
console.log(handleArray([100,100,100,100,100]));




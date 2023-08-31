const tinderUserOne = new Object()
console.log(tinderUserOne);

const tinderUserTwo = {}
console.log(tinderUserTwo);

tinderUserOne.id = "abc123";
tinderUserOne.name = "Syed Maaz";
tinderUserOne.isLoggedIn = true;
console.log(tinderUserOne);

tinderUserTwo.id = "abc123";
tinderUserTwo.name = "Syed Maaz";
tinderUserTwo.isLoggedIn = true;
console.log(tinderUserTwo);


const regularUser = {
    email:"syedmaaz@gmail.com",
    fullName:{
        usefullName:{
            firstName:"Syed Maaz",
            lastName:"Siraj"
        }
    }
}
console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullName);
console.log(regularUser.fullName.usefullName);
console.log(regularUser.fullName.usefullName.firstName);

const Obj1 = {1:"a" , 2:"b"}
const Obj2 = {3:"c",  4:"d"}

const Obj3 = Object.assign(Obj1,Obj2);
console.log(Obj3);

const Obj4 = {...Obj1,...Obj2};
console.log(Obj4);

console.log(Object.keys(tinderUserOne));

console.log(Object.values(tinderUserOne));

console.log(tinderUserOne.hasOwnProperty('isLoggedIn'))
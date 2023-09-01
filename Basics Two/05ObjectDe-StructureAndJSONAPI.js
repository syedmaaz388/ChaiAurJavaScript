const User = {
    name:"Syed Maaz",
    id:"abc123",
    isLoggedIn:true,
    CourseName:"React Js"
}
 
const {CourseName} = User;
console.log(CourseName);

const {name : CourseInstructor} = User;
console.log(CourseInstructor);


// JSON
// {
//    "name" : "Syed Maaz",
//    "CourseName" : "React Js",
//    "Price" : "Free"
// }
// or
// [
//     {},
//     {},
//     {}
// ]
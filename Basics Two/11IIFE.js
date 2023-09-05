// What is an IIFE? An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop. Having a function that behaves that way can be useful in certain situations. IIFEs prevent pollution of the global JS scope.

(function chai(){
    console.log("DB Connected");
})();


(() => {
console.log("Hello Fraands");
})();

(function pelo(data){
    console.log(`${data} is connected`)
})("DataBase");

((name) => {
    console.log(`${name} is my name`);
})("Maaz");
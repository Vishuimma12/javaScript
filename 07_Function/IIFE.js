//An Immediately Invoked Function Expression (IIFE) is a JavaScript function
//that runs as soon as it is defined.   (function () { ... })


(function chai(){     //we use this because we want to run the function as soon as posible..
    console.log("DataBase Connected");
})();

//if we use two IIFE function we use the end of the function is compusory   ';' 

( (name) => {     
    console.log(`${name} DataBase Connected`);
})('Vishal');

//((name) => { ... })('Vishal');
//   |                   |
//  parameter         argument

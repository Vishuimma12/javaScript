//An Immediately Invoked Function Expression (IIFE) is a JavaScript function
//that runs as soon as it is defined.   (function () { ... })


(function chai(){     //we use this because we want to run the function as soon as posible..
    console.log("DataBase Connected");
})();

( (name){     
    console.log(`name: ${name} DataBase Connected`);
})('Vishal');
//object literals

// const jsUser = { }   //syntax

//In object we can define key and also value
const mySymb = Symbol("key1");
const jsUser = {
    name : "vishal",
    age : 20,
    [mySymb] : "key1",                  //this square bracket is used for declare a symbol..
    "FullName" : "Vishal Singh",             // this value we can't access usign dot.
    email : "vssingh80052377@gmail.com",
    lastLoggedINDay : ["Monday", "Tuesday"],
    IsLoggedIn : false,
}

console.log(jsUser.name);
console.log(jsUser["FullName"]);  // "FullName" for using this value we use  ["...."]
console.log(jsUser[mySymb]);//way to access the symbol..
console.log(typeof mySymb); // verifing that if it symbol or not

jsUser.email = "vss@gmail.com";  //use to change the value

// Object.freeze(jsUser);// we locked or freeze our object
// jsUser.email = "vewerws@gmail.com"; // the value is freeze above so that this value is not used..
console.log(jsUser);

// Function 

jsUser.greating = function(){
    console.log("Hello javaScript!");
}

jsUser.greatingtwo = function(){
    console.log(`Hello javaScript!, ${this.name}`);
}
console.log(jsUser.greating); // [Function (anonymous)] => function has not execute yet, only function reference are there. 
console.log(jsUser.greating());//executed function...
console.log(jsUser.greatingtwo());


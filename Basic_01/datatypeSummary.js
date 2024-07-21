//Note:- javaScript is Dynamically typed language.
// primitive datatype

// 7 types : String, Number, Boolean, null, Undefiend, Symbol, BigInt.....

const score=100;
const scoreValue=303.3;

const isLoggedIn=false;
const outsideTemp = null;
let UID;

const ID= Symbol("123");


// Reference Type(Non-primitive): Array, Objects, Functions

const array = [2,3,4,5];
const arr = ["vishal","jatin"];

let MyObject = {
    name :"vishal",
    age  : 22,
    Loc  :"derabassi"
}

const MyFunction = function() {
    console.log("Hello World");
}

//Type of =>

    console.log(typeof score);        // 'number'
    console.log(typeof scoreValue);   // 'number'
    console.log(typeof isLoggedIn);   // 'boolean'
    console.log(typeof outsideTemp);  // 'Object'
    console.log(typeof ID);           // 'Symbol'
    console.log(typeof array);        // 'object'
    console.log(typeof arr);          // 'object'
    console.log(typeof MyObject);     // 'object'
    console.log(typeof MyFunction);   // 'function'
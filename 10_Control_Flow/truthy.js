//truthy and falsy values.....

const useremail = "Vishal@gmail.com";

if (useremail) { //This is a truthy value because we have some value of useremail..
    console.log("Got email...");
    
} else {
    console.log("Dont have user email...");
    
}

// falsy value are :-   false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy value:-  "0", 'false', " ", [], {}, function(){}


//check array.......[]
const arr=[];
if (arr.length===0) {
    console.log("Array is empty!");
    
}

//check Object..... {}

const obj = {};
if (Object.keys(obj).length===0) {
    console.log("Object is empty!");
}


//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5??10;   // 5 is assigned..
// val1=null??10  // 10 is assigned..
// val1=undefined??15  // 15 is assigned..

val1= null ?? 10 ?? 20;  //10 will assigned..
console.log(val1);


//Terniary Operator:-     conndition? true : false 

const icePrice= 100;

icePrice<=80 ? console.log("Less than 80") : console.log("Grater then 80");







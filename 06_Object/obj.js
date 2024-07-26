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



//++++++Object Singletone++++ (iS use constructor..)

//const UserJs = new Object();

const tinderUser = {}

tinderUser.ID="123qwe";
tinderUser.NAme = "Vishal";
tinderUser.LoogedIn = true;

console.log(tinderUser);

// we can declear object inside the object....

const Ins = {
    Fullname: {
        firstname:"Vishal",
        lastname : {
            lname :"Singh",
            midname: " "
        }
    }

}
console.log(Ins.Fullname.lastname.lname);

// we can also combine an object like an array..

const Obj1 ={1:"a",
    2:"b",
    3:"c"
}

const Obj2 ={4:"a",
    6:"b",
    5:"c"
}

// const Obj3 = {Obj1,Obj2}     //this have same problen as array 
/* =>{
  Obj1: { '1': 'a', '2': 'b', '3': 'c' },
  Obj2: { '4': 'a', '5': 'c', '6': 'b' }
}
*/

// so to solve this problem.. 
// const Obj3 = Object.assign({},Obj1,Obj2); //it combine all object in single object..
//assign({},Obj1,Obj2);   {}=> this is the target, Obj1,Obj2=> Socurce



//sprade Operator
const Obj3 = {...Obj1,...Obj2} // mostly use sprade oper..
console.log(Obj3);


//when values comes from data base....

const users = [
    {
        id : 1,
        email: "vss@gmail.com"
    },
    {
        id : 1,
        emails: "vss@gmail.com"
    },
    {
        id : 1,
        emails: "vss@gmail.com"
    },
    {
        id : 1,
        emails: "vss@gmail.com"
    },
    {
        id : 1,
        emails: "vss@gmail.com"
    },
]

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //IMP :-
console.log(Object.values(tinderUser));//IMP:-
console.log(Object.entries(tinderUser));//IMP:-
console.log(tinderUser.hasOwnProperty(`LoogedIn`)); //IMP:-
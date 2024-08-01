//+++++++ Arrow function +++++++++

//this is an global object....
const user={
    userName: 'Vishal Singh',
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.userName} , Welcome to website`);
    }

}
user.welcomeMassage(); 
user.userName="Sam";     // here we change the context(means value) changed 
user.welcomeMassage();

console.log(this);       //Globle:- current context will be empty but only in node IDE..
//when you run this code in a browser environment, console.log(this); inside 
//the  function will log the window object to the console.
console.log(`${this.userName} , Welcome to website`);

// function chai(){
//     console.log(this);  //If you run the same code in a Node.js environment, this would refer to the global object.
// }
// chai();

// const one=function(){
//     console.log(this);  //same as the above chai function
// }
// one(); 

//arrow function

const User = () => {
    let NAME = "San Singh"
    console.log(this); //Arrow functions do not have their own this context.
}
User();


//syntax of arrow function :-  () => {  } , Standard arrow function with a block body


// You must use the `return` statement to return a value. {     return "compulsury"}
const addtwo = (num1, num2) => {
    return num1 + num2;  // Explicitly returns the sum of num1 and num2
};
console.log(addtwo(3, 4)); // Outputs: 7


// Concise arrow function with an implicit return
// When there is only one expression, the `return` keyword can be omitted.
const AddToo = (num1, num2) => num1 + num2; 
console.log(AddToo(3, 4)); // Outputs: 7


// Arrow function with parentheses around the expression
// Parentheses can be used to wrap the expression, but they are not necessary in this case.
const addTo = (num1, num2) => (
    num1 + num2   // The sum of num1 and num2 is implicitly returned
);
console.log(addTo(3, 4)); // Outputs: 7


const Name = () => ({Name:"vsihal"});  //we can also create an object inside the paranthises....
console.log(Name());
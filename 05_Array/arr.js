//++++++++++ Array ++++++++

const myArr = [1,2,3,4,5,6]; //laso we can store string type value['Vishu',"Vishal","golu"]
console.log(myArr[0]);  //access by using Indexing start with 0 till arr.length

//shallow: shallow copy is a reference type.
//Deep copy: it is a stack .

const  myArr2=new Array(1,2,3,4,5);
console.log(myArr2[2]);

//Array method....
myArr.push(7); //it add the value at the last of length of array.
myArr.push(8); //same

myArr.pop(); //it remove the last value..

myArr.unshift(9); //it add the value at the 0th index... it shift the all values..
myArr.shift();    //it revome the 0th index..

console.log(myArr.includes(6)); // it check value 6 is in that array or not. if yes return true.
console.log(myArr.indexOf(6)); // it used for checking the index position..

console.log(myArr);

const newArr = myArr.join();//it add the all element of an array into a string.

console.log(newArr);
console.log(typeof newArr); //here i use typeof method the see, how join method work.. 
 
//slice or splice
const ass=[0,1,2,3,4,5];
console.log("Original ", ass);


const mynum1 = ass.slice(1,3); //No effect on main arrya.. also it doesn't include the vale, where we pass the last index in array.. like
console.log("new array using slice ", ass);

const mynum2 = ass.splice(1,3);// it manuplite the original array.., it the all value from 1 to 3

console.log("Slice " +mynum1 );
console.log("Splice "+ mynum2);

console.log("new array using splice ", ass); //main array are manuplited by Splice, thats why the vale of 1 to 3 index are removed..

//string.....
const char1 = ["a","b","c","d"];
const char2 = ["A","B","C","D"];

// char1.push(char2);  // when we push one array to another array.. are will also be the inside of one array.
// console.log(char1);

// console.log(char1[1]);

//Sprade...
const newArray =[...char1,...char2]; // it combine the both are in single array..(just like a glass sprade..) 
console.log("Sprade array "+newArray);

const anotherarr=[1,2,3,4,[4,5,6],[7,8,9,[10,11]]];
const realAnarr = anotherarr.flat(2); //it gives the all array in single array, Infinity is a depth(its depth is 3) of the array
console.log(realAnarr);

//
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); //form method is used for making an array
console.log(Array.from({name:"Hitesh"})); //important topic..

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // we can create value in to an array..


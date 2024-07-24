const name = "Vishal";
const repocount =20;

// console.log(name + repocount+ " value");  this is not a good way to concunate....

//proper ways
console.log(`My name is ${name} and my repocount is ${repocount}`);
//this is string interpolation, we can do anything on the go...

// good ways to declear string..
const lastName = new String(`Singh`);
console.log(lastName);

console.log(lastName[0]); // for checking key value pair
console.log(lastName.__proto__); // for seeing the object


console.log(lastName.length); //lenght of string 
console.log(lastName.toLocaleUpperCase());//to make the string in upper case.
//Note:- this toLocalUpperCase() function make the char in upper case it doesn't change the
//value of char in Upper case as we know it just copy the string in stack memory and no effect on the main string.

console.log(lastName.charAt('4')); //for the the character at with position..
console.log(lastName.indexOf(`g`));//for checking the index of a char..

const gameName = 'Vishal-Singh';
const newString = gameName.substring(0,6);//It divide the value in sub string like 'Vishal' & `Singh`
//in the substring (0,6)-> 0 are the 1st index position, 6 are the last.
console.log(newString);

const anotherString=gameName.substring(-3,3);// we can pass also negative value
console.log(anotherString);

const newStringOne = '     Vishal      ';
console.log(newStringOne);
console.log(newStringOne.trim());// used for the removing white space..

const url = `https://vishal.com/vishal%20Singh`;
console.log(url.replace('%20',`-`)); // used for replacing something in a string..
console.log(url.includes(`San`)); //return false thats means San doesn't exist in url..

console.log(gameName.split(`-`)); //it split the value where compiler findes the `-`.
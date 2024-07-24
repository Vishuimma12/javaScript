const score = 40;
console.log(typeof(score)); //it is a number...

const balance = new Number(100);  //It a proper number because, here we define the number datatype.
console.log(balance);

console.log(balance.toString()); //it is a number but if we check type of it give string type.
console.log(balance.toString().length); //we can use the string property, it give the lengeth of the char `3` 
console.log(balance.toFixed(2)); //two digit after the decimal point//

const otherNum = 123.82;
console.log(otherNum.toPrecision(3)); //it gives the precise value (23.12=23),(23.89=24) like this.

const Num = 100000;
console.log(Num.toLocaleString()); //it add the commas to discribe the number in US standard
console.log(Num.toLocaleString('en-IN')); //this discribe the number as a Indian Standard

// ********MAX & MIN********

console.log(Number.MAX_VALUE); //represents the maximum numeric value representable in JavaScript.
console.log(Number.MIN_VALUE); //represents the Minimum numeric value representable in JavaScript.
 
function calculatorCartPrice(...num1){      //... Rest Operatore, we know a sprade Operater but here we use a rest opre...
    return num1;                            //it take the multiple parameter when we pass as an argument..
}

console.log(calculatorCartPrice(200,100,299));


const user ={
    username:'Vishal',
    price: 199
}

function comuser(anyboject){
    console.log(`Username is ${anyboject.username} and 
    the price is ${anyboject.price}.`)
}

//we can also pass the object as a prameter
// comuser({
//     username: "Jatin",
//     price:490
// }) 

// we can also pass the array as a prameter

const myArray=[200,300,400,450];

function returnsecValue(getArray){
    return getArray[1]
}
console.log(returnsecValue(myArray))


//+++++++++ Instrusting ++++++++++

//console.log(one(5));     //we can also call the funtion above...
function one(num){         //This is funtion...
    return num+1;              
}
console.log(one(5));


//console.log(two(5)); //if we know before the calling the var, we have to initilize it..... so that this throw error..
const two = function(num){ //This is also a funtion but we store a funtion in a variable 
    return num+2;
}
console.log(two(5));


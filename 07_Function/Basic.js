function sayMyname(){   // function is the keyword for making a function..
                        //sayMyname is the name of the function..() this is used for the parameters..
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}
sayMyname();  //calling the funtion...

function addTwoNum(num1,num2){  //num1, num2 are the parameter ....
    console.log(num1+num2);
}
addTwoNum(5,6);   //-> here we pass the argument 
const result=addTwoNum(10,10); //can we store the or not
console.log(result);// the function doesn't have a return statement, 
                    //result will be undefined. If you want to store the result of the addition in a variable


function addTwoNum2(num1,num2){ 
    return num1+num2;
}
const result2=addTwoNum2(10,10); 
console.log(result2); //the function will return the sum of num1 and num2, and you can store this value in result and print it.

function loginUserMassage(username){
    if(username===undefined){
        console.log('Please inter a Username');
        return
    }
    // if(!undefined){
    //     console.log('Please inter a Username');   // same becasue not undefine = so value
    //     return
    // }
    return `${username} just logedin.`; //literals allow you to embed expressions within a string using the ${} syntax
}

console.log(loginUserMassage('Vishal Singh'));
console.log(Math); //it is an object...

const Num = new Number(100.9);
console.log(Math.abs(-Num));  //abs thats means absolute. it give the +ve value
console.log(Math.round(Num)); //it make the number as round of (2.2=2), (2.9=3)

console.log(Math.ceil(Num));   //it will take the gratest number.. (2.2=3), (2.9=3)
console.log(Math.floor(Num));  //it will take the short number.. (2.2=2), (2.9=2)

// console.log(Math.sqrt(Num));   //Give the Square root of the value

console.log(Math.random());    //it gives the random values between 0 and 1..
console.log(Math.floor((Math.random()*10) + 1)); //it gives the random between 1 and 10..
                                                 //Becasuse we frist multi. with 10 so that the values comes between 0 to 9
                                                 //after that we add 1 so that the value not comes (like 0.232) min=1, max=10
                                                 //math.floor() will give the short round off number..

const min =10;
const max =20;
const random=Math.floor(Math.random() * ((max-min)+1)+min);
/*
    Step1- we have to declare two varible for max and min so that we can get the random number between them.
    Step2- make another varible to store that random number..
    Step3- use Math.floor(...); to get the random number without decimal.
    Step4- Math.random() it gives the random number..
    Step5- * ((max-min)+1) subtract the max and min number. so that we get the range of the random number. range may be comes with 0
           to removing 0 we need to add 1 so that the values not =0
    Step6- Add min because we need atleast min number(smallast number = min )
    Final Step- Output will show b/w the min and max..
*/
console.log(random);


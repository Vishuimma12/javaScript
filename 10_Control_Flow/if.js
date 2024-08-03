//If Statement 

// if(Condition){
//        StatementRule....
// } else {
//        Statemant
// }

//Comprarasion operator...(< , > , <= , >= , == , != , === , )
//                                                      |_> Strict Check (it also check the typeof.....)

const temprature = 55;

if (temprature < 50) {
    console.log("Less then 50");
    
}else{
    console.log("Grater then 50");
}


const score = 21100;

if(score>100){
    const power = "fly";
    console.log(`User Power: ${power}`);
}
else{
    console.log(`No power`);
    
}

//Nested.....

if(score<500){
    console.log("Less then 500");
}else if (score < 900) {
    console.log("Less then 900");
}else{
    console.log("Grater then 900");
}

const userLoggedIn=true;
const debitCard=true;
const GoogleLoggedIN= true;
const Email=true;

if (userLoggedIn && debitCard) {
    console.log("Allow to proced!");
    
}
if (GoogleLoggedIN || Email) {
    console.log("LoggedIn");
    
}
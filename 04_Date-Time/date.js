

let myDate = new Date();
console.log(typeof myDate);
console.log(myDate); //it show the date 
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

//we can make a costom date
let myCreatedDate = new Date(2024,1,23);
console.log(myCreatedDate.toDateString());

//Specific date

let newdate= new Date("01-14-2024");
console.log(newdate.toLocaleString());

//time-stamp
let mytimeStamp = Date.now();
console.log(mytimeStamp);
console.log(myCreatedDate.getTime()); //values compes in mil/s
console.log(Math.floor(Date.now())/1000); //mil/s to second 

//for month,date, day etc
let  ndate = new Date();
console.log(ndate.getDate());
console.log(ndate.getDay());
console.log(ndate.getMonth());

// newdate.toLocaleString('default',{
//     weekday: "long"
// })
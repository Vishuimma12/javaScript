// For LOOP...


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop = ${j}, Outer Loop = ${i}`);
    }
    
}

//use of break and continue method....

for (let i = 0; i <= 10; i++) {
    console.log(`Number = ${i}`);
    if (i==5) {
        console.log("Closing at 5");
        break
    }
}

for (let i = 0; i <= 10; i++) {
    
    if (i==5) {
        console.log("Skipped 5");
        continue
    }
    console.log(`Number = ${i}`);
}
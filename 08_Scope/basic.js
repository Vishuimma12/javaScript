const a = 200; // This is a Global scope because we can assess the value of a Insside the or out side the block


if (true){
    let b=10;
    const a=10; //this value of 'a' is only used in this block 
    //This is the blocked scope, we can access it only on this block..
    //JavaScript has an exceptional case if we declear value by using Var dataype. it will access anywhere so that we are not using More Var..
    console.log('Inner: ' + a);
}
console.log('Global: ' + a);


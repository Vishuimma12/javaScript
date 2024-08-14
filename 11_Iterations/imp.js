//specilized loops...

//arrays specific loops..
//forof loop....


// ["","",""]
// [{},{},{}]

const arr= [1,2,4,5,6];

for (const num of arr) {
    console.log(num);
    
}

//Maps...
const map = new Map(); //object it hold key value pair..
map.set('IN', 'India')
map.set('USA', 'AUs..')
map.set('Fr', 'France')

console.log(map);

for (const [key,value] of map) {
    console.log(key, ":- ", value);     //it gives an array..
}

//forin loop
 const game = {
    js: "javaScript",
    cpp: "C++",
    py: "python",
    swift: "Swift by apple"
 }

for (const key in game) {
    console.log(`${key} Extension for ${game[key]}`);
    
}
// for (const key in arr) {
//     //console.log(key); //it give the index of the array
    
//     console.log(arr[key]);
    
// }

//foreach loop....
const programming= ["java", "php","py","cpp","js"];

programming.forEach( function (item){
    console.log(item);
    
});

programming.forEach(element => {
    console.log(element);
});
//parameter of for each
programming.forEach((item,index,programming)=>{
    console.log(item,index,programming);
    
});

const myCoding=[
    {
        languageName: "JavaScript",
        FileName: "js"
    },
    {
        languageName: "Python",
        FileName: "py"
    },
    {
        languageName: "C++",
        FileName: "cpp"
    },
    {
        languageName: "HTML",
        FileName: "html"
    },
    {
        languageName: "React",
        FileName: "jsx"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
});

//if we store the foreach in a variable it will be Undefined...
 const language= programming.forEach(  (item) => {
    return item;
 }  )
//  console.log(language);//it will undefined because we cant store the the value using for loop..
 //the forEach method in JavaScript doesn't return anything; it's designed to iterate over each element in an array and execute a provided function for each element.

 const myNum= [1,2,4,5,6,7];

// const newNum= myNum.filter((num) => num>4)

const newNum= myNum.filter((num) => {
    return num>4; // because we have opened the socpe
})
console.log(newNum);
 

//filter(  ()=> {   }  )

const Book = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", edition: 2001 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", edition: 1999 },
    { title: "1984", author: "George Orwell", edition: 2003 },
    { title: "Pride and Prejudice", author: "Jane Austen", edition: 2005 },
    { title: "Moby-Dick", author: "Herman Melville", edition: 1998 },
    { title: "War and Peace", author: "Leo Tolstoy", edition: 2006 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", edition: 2001 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", edition: 2002 },
    { title: "Brave New World", author: "Aldous Huxley", edition: 2010 },
    { title: "Ulysses", author: "James Joyce", edition: 1997 },
    { title: "The Odyssey", author: "Homer", edition: 2004 },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", edition: 1994 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", edition: 2008 },
    { title: "Great Expectations", author: "Charles Dickens", edition: 2009 },
    { title: "Jane Eyre", author: "Charlotte Brontë", edition: 2012 },
    { title: "Wuthering Heights", author: "Emily Brontë", edition: 2011 },
    { title: "The Divine Comedy", author: "Dante Alighieri", edition: 2007 },
    { title: "Don Quixote", author: "Miguel de Cervantes", edition: 2000 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", edition: 2014 },
    { title: "The Sound and the Fury", author: "William Faulkner", edition: 2013 },
    { title: "The Grapes of Wrath", author: "John Steinbeck", edition: 2005 },
    { title: "In Search of Lost Time", author: "Marcel Proust", edition: 1996 },
    { title: "Les Misérables", author: "Victor Hugo", edition: 2001 }
];

const userbooks = Book.filter((bk) => bk.edition <=2000)

console.log(userbooks);

// map( () => {    })

const NuMber= [1,2,3,4,5,6,8];
const addnum = NuMber.map( (num) => {
    return num+10;
})
console.log(addnum);


//chaining......

const Mum= NuMber
        .map((num) => num+10)
        .map((num) => num+1)
        .filter((num) => num<=4)

console.log(mum);

// primitive datatypes..........
// 7 categories: String , number , boolean , null , undefined , Symbol , BigInt

const score = 100; // number
const scoreVal = 100.3 //number
const str = "Arpita"; // string
let bool = true; //boolean
let Var; //undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123'); //Symbol 'id and anotherId are not same......
// This is the significance of the symbol that if the value is passed same , inspite of that also both will be different values.....
console.log(id === anotherId);
const bigNumber = 4583749285687346n; //BigInt



// reference (non-primitive) datatypes............
// Array , Objects , Functions

const num = [1,2,3,4,5,6,7,8,9]; //array
let myObj = {
    name: "Arpita",
    age: 21,
}                  // objects
const myFun = function()
{
    console.log("Hello!!")
}                 //functions



//for finding the type of the datatype
console.log(typeof(myFun));

// NOTE : when we will find out the type of the null datatype via 'typeof' function , then the type will be shown as 'object'

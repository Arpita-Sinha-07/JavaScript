const score = 400;
console.log(score);

const num = new Number(500); // specially specified
console.log(num);

// for converting it to string 
console.log(num.toString()); // converting the number into string
console.log(num.toFixed(2)); // gives the value till two decimal places
const nm = 5.68729;
console.log(nm.toPrecision(3)); // gives the precise value till three decimal points

const hundred = 1000000;
console.log(hundred.toLocaleString()) // gives the number in a indian way of representing the number in a more formatted commas separartion
console.log(hundred.toLocaleString('en-US')) // gives the number ina more representable format having commas with US standard.....



// __________________________ MATHS ____________________________

console.log(Math.abs(-4)); // gives the absolute value of the negative passed argument
console.log(Math.round (4.7));  // gives the round of value of the  passed value
console.log(Math.ceil(4.2)); // will give the upper value of the given passed value
console.log(Math.floor(4.9)); //will give the lower bound value of the given value in the argument
console.log(Math.min(2,3,4,5,67,8)); 
console.log(Math.max(3,1,5,7,8,3)); 

console.log(Math.random());  // always a different value i.e. between 0 and 1

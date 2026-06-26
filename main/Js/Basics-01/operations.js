let val = 33
let negVal = -33

console.log(2+2) // addition result
console.log(2-2) //0
console.log(2*2) //multiplication
console.log(2**3) //2 to the power 3 = 8
console.log(2/2) // division
console.log(2%2) //remainder


//concatenation..........
str1 = "Hello"
str2 = " World"
console.log(str1+str2)
console.log(1+ "2") //will be treated as string only 
                    //as int operated with string , result is string
console.log("1"+2) //same as above
console.log("1"+2+1) //here the addition operator works from left to right , so same the result will be string

console.log(1+2+"1") // same due to left to right operation
console.log(+true); // => 1
console.log(+""); //=> 0

// PREIX AND POSTFIX OPERATORS.....
val = 2;
console.log(++val)
console.log(val++)
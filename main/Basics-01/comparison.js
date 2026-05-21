//comparison operator
// >
// <
// ==
// >=
// <=
// !=
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// THis is so because equality operator and comparison operator handles differently null value
// comparison operator considers it as 0 , that's why (null>0) is false and (null>=0) is true

// ===  => strict check

console.log("2" == 2);  // answer is "true" bcz conversion takes place
// answer is "false" bcz the data type is being checked that whether these two are having same datatypes or not......
console.log("2" === 2); 
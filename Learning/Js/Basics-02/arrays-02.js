// ARRAY_______________
//Operations on the array

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,0];

array1.push(array2);
console.log(array1); // it pushes the whole array to the last of the array as an individual element , i.e for traversing we have to do nested traversing
const num = array1.concat(array2);
console.log(num);

// another way to concatenate the arrays element is via SPREAD function

const number = [...array1,...array2];
console.log(number);

const another_array = [1,2,3,[4,5,6],7,[8,[9,0]]];
console.log(another_array.flat(Infinity)); // will make a single array of all the subarrays present in that array 



//checking if the given data is an array.......
console.log(Array.isArray("Hitesh"));

//converting into array
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"arpita"}));//this will not convert the string into the array elements as in this we have to specify that
// whether we have make the value or key the part of the array element


let score1 = 100;
let score2 = 200;
let score3 = 300;
Cconsole.log(Array.of(score1,score2,score3)); // will create an array with these acttered values...


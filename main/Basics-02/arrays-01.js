// ARRAYS______________

const arr = [1,2,3,4,6,7,8];
// array always makes shallow copy 
// that is if there is change in the original array then that will lead to chnages in the copied array as well


const arr2= new Array(1,2,3,4,5,6,7,8,9);


//array methods________
arr.push(9); // adds the value in the array
console.log(arr);
arr.pop(); // removes the last value of the array

arr.unshift(9); // will start the value in the strat of the array
arr.shift(); // will remove the first value of the array , i.e. the 0th index value of the array 
// and will shift the whole array to the left 
console.log(arr.includes(9)); // will return the answer in either true or false , that if the array includes this element passed or not
console.log(arr.indexOf(9)); // will return -1 , as 9 is not present in this array
console.log(arr.indexOf(1)); // will return the index of this element


//slice and splice
array = [0,1,2,3,4,5,6,7];
console.log(array.slice(1,3)); // slice will not change the original array 
//and the argument includes 1 and excludes 3 

console.log(array.splice(1,3)) // splice will change the original array 
// and in the argument, it includes 1 and 3 as well


//ARRAYS

const stu = ['hi', 'hello','hye'];
let len = stu.length;
console.log(len)
console.log(stu[2])

// array is mutable, i.e. in plca evalue can change
stu.push('alexa') // will be placed at last
console.log(stu)

// arrays are not homogenous in js

const Arr = [1,true,'hello',3.3]
console.log(Arr)

//indexOf = finding the index value
//length = length of the array
//pop() = remove the last element
//push(nfvjsd) = add the element at the last
// reverse = reverse the array 



//              ADVANCE ARRAY 


const arr = [1,2,3,,5,6,7,7,8,9]

arr.forEach((val) => console.log(val)); // hight order inbuilt function 'forEach'

arr.map((val) => console.log(val))

//  DIFFERENCE BETWEEN MAP AND FOREACH

// Foreach doesn;t return anuy value
// map return a value , like it returns the value in an array


//FUNCTIONS IN AN ARRAY________________________

const newArr = arr.filter(num => num%2==0) // only even part of arr

console.log(newArr)

// filter 
// slice
//splice = returns the deleted element in a new array , and performs the dlt operation in the array itself

const num = [1,2,3,4,5,6,7,8,9]

let newarray = num.splice(1,3);
console.log(newarray)
console.log(num)


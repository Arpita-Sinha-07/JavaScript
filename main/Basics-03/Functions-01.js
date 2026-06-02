// FUNCTIONS.............

function sayMyName()
{
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
    console.log("A");
}

sayMyName();
// sayMyname : this will only give the reference

function addNumbers(num1, num2) // parameters
{
    console.log(num1+num2);
}

addNumbers(2,3); // 5 , 2 &3 are arguments
addNumbers(2,"a"); //2a
const res = addNumbers(2, null); //2 , the value of the res will be undefined 
// as there is no any return type of the function and return value as well

// return type functions............

function add(number1 , number2)
{
    let sum = number1+number2;
    return sum;
}

const result = add(3,7);
console.log(result);

function loginUserMessage(username)
{
    return `${username} just logged in`
}

let state = loginUserMessage("Arpita");
console.log(state)

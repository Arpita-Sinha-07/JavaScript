//ARROW FUNCTION 


// 1. SYNTAX
const hello = () => { // arrow function
    console.log("Hii");
}

hello();

const add = (a,b) => {
    return a + b;
}

// const add = (a,b) => a+b; ONE LINER FUNCTION

add(2,3)

//2 . 'ARGUMENTS' KEYWORD
// THERE IS N ARGUMENTS KEYWORD IN AN ARROW FUNCTION


//3. HOISTING
//In normal function we can hoist the function, before or after the function definition 
// But in arrow function we have to first declare it then only we can hoist it 

// 4 . THIS KEYWORD
// In normal function ,this keyword focuses on the caler function 
// In arrow function , this keyword focuses on the entire object , i.e window , as its scope is global

// HIGH ORDER FUNCTION

// The function that takes the function as an argument is considered to be as high order function

// SYNTAX
function add(num1 , num2 , fun ){ // HIGH ORDER FUNCTION
    let result = num1 + num2;
    fun(result); // call back function
}

function show(res){
    console.log(res);
}

add(10, 15 , show) // givinf the function as the parameter


add(400, 500 , (res) => console.log(res))
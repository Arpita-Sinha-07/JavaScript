

// function add (num1 , num2){
//     let ans = num1 + num2;
//     return ans;
// }

// let res = add (2,3);

// console.log("The result is :",res)


// IF numerous arguments are there !!!!

// function addition (){
//     let ans = 0;
//     for(let i = 0; i<arguments.length ; i++)
//     {
//         ans += arguments[i];
//     }
//     return ans;
// }

// let result = addition(1,2,3,4,5,6,7,8,9,10)
// console.log(result);

function adds(...n){  // ... => spread operator
    let answer = 0;
    for(let i=0;i<n.length;i++){
        answer += n[i];
    }

    return answer ;
}

let result = adds(1,2,3,4,5)
console.log("the another way of adding is using array and the answer is :", result);
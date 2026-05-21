// DATE AND TIME__________________

let dt = new Date();
console.log(dt.toString()); // Mon Mar 16 2026 16:35:32 GMT+0530 (India Standard Time)
console.log(dt.toDateString()) // Mon Mar 16 2026
console.log(dt.toLocaleString()); // 16/03/2026 , 4:35:32 pm

let mytime = Date.now(); // current date of now

let newDate = new Date()

console.log(newDate)
//several functions to get the desired output
console.log(newDate.getMonth());
console.log(newDate.getDay()) // to get the day of now

//TO CUSTOMIZE THE FORMAT_____________
newDate.toLocaleString('default' , {
    weekday: "long"
})



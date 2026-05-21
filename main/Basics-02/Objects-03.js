//SINGLETON 
//if objects are created via literals then singleton is not created 
//but if objects are created via constructors then singleton will be formed


//Objects Literals
const JsUser = {
    name: "Arpita",
    "full_name ": "Arpita Sinha",
    age: 18 ,
    location: "jaipur",
    email: "arpita@gmail.com",
    isloggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}


console.log(JsUser.email) // way of getting the objects ka values
console.log(JsUser["email"]); // to get the values , better way


JsUser.email = "sinha@gmail.com"
//will change the email of the object
// Object.freeze(JsUser) // this function will stop the change in the objects 
JsUser.email = "Hitesh@gmail.com" // will not raise an error but this function will not work as well


JsUser.greeting = function() // normal a function inside the object
{
    console.log("Hello user");
}
JsUser.greet = function()
{
    console.log(`hello users , ${this.name}`); // string interpolation 
}
console.log(JsUser.greeting())


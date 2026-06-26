// how to declare object using constructors....

const TinderUser = new Object(); //Singleton Object
const TinderUser2 = {}; // Non Singleton Object

TinderUser.id = "123abdc"
TinderUser.name = "Arpita"
TinderUser.IsLoggedIn = false

console.log(TinderUser);

const User = {                // nested objects
    email : "arpita@gmail.com",
    fullname: {
        userFullName:
        {
            firstname:"Arpita",
            lastname:"Sinha"
        }        
    }
}

console.log(User.fullname.userFullName) // accessing the nested objects

//how to merge the two objects .....
const obj1 = {1: "a",2:"b", 3:"c"};
const obj2 = {4: "d", 5:"e", 6:"f"};


const object3 = {obj1, obj2};
console.log(object3); // this will not create a merged object , it will vreate an object having two different nested objects

const obj3 = Object.assign({}, obj1, obj2) // the '{}' symbol represents that the  
console.log(obj3); // this will spread the elements and then will join them to get a merged object

//SPREAD WAY 
const obj4 = {...obj1,...obj2};
console.log(obj4)

const users = [
    {
    id : 1,
    email: "h@gmail.com"
},
{
    id : 1,
    email: "h@gmail.com"
},
{
    id : 1,
    email: "h@gmail.com"
},
{
    id : 1,
    email: "h@gmail.com"
}
]

users[1].email


console.log(Object.keys(TinderUser)); // will give the array of the keys
console.log(Object.values(TinderUser)) // will give the array of the values 
console.log(Object.entries(TinderUser)) // will give the enetries in the sub array format 

// can check the property of the object
console.log(TinderUser.hasOwnProperty('IsLoggedIn'));



//___________________________________________________________________
// DESTRUCTURING

const course = {
    coursename: "js",
    price: "99",
    courseInstructor: "hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//API sends the data in .json format ......
// and .json is nothing just an object like = 
// {
//    "name" : "hitesh",
//    "coursename" : " js in hindi",
//    "price" : "free"
// }

// also the Api can be found in the array format as well rather than in object format only
// [
//     {},
//     {},
//     {}
// ]


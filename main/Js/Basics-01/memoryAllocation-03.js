// for the primitive datatype , STACK data structure is used.........
// for the non-primitive datatype , HEAP data structure is used.........

//when we change the relative value of any variable in primitive datatype "STACK"
//due to stack ds, only that value use to change as it gives the copy only

let youtubename = "myyoutubenamedotcom"

let anotherYoutubename = youtubename // a copy of variable is passed
anotherYoutubename = "myanotheryoutubedotcom"

console.log(youtubename)
console.log(anotherYoutubename)

//when we change the relative value of any variable in non-primitive datatype "HEAP"
//due to heap ds, both the value use to change as it gives the reference of the first

let infoOne = 
{
    name: "Arpita",
    email: "arpitaEmail.com"
}

let infoTwo = infoOne; //reference of the variable is passed
// i.e if the value is changed then the original value will be affected


infoTwo.email = "anotherEmailofArpita.com" 
//changing via he reference , so the original value will be changed

console.log(infoOne)
console.log(infoTwo)



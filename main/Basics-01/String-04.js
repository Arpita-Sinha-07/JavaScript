//String
//for concatenation.......

const name = "Arpita"
const repoCount = 50;

//console.log(name + repoCount + "Value");
//instead.......

//string interpolation
console.log(`Hello !! my name is ${name} and I have ${repoCount} repositories in my github account `); 
const myname = new String('Arpita Sinha');
console.log(myname[0]);
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(2)); //string at the position 2
console.log(myname.indexOf('t')); //gives the index of the string passed
const firstName = myname.substring(0,6); // no negative value is accepted
console.log(firstName); 

//slicing
const anotherString = myname.slice(0,6) //negative value is accepted  "slicing of the strings" 'last value of the string is not included
console.log(anotherString)
const newStringOne = "     Sinha     ";
console.log(newStringOne.trim()); // removes all the spaces
console.log(myname.replace('Arpita','Laddu')); // for replacing the strings
console.log(myname.includes('Laddu')); // checks whether the string is present or not !!!!, and the result is either true or false
console.log(myname.split(' ')); //will split the string where it will find the passed string in this function as argument , here " " (space) is the spilitting element
// will return the separated strings in an array format



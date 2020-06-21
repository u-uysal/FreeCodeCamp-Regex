/* The shortcut to look for digit characters is \d, with
 a lowercase d. This is equal to the character class [0-9], 
 which looks for a single character of any number between zero and nine. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
console.log(result) //4


let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // match non-numbers
let result = numString.match(noNumRegex).length;
console.log(result);
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result) // [ 'ss', 'ss' ] if there is a space , it occurs another array items


let myStr = "aabc";

let regexC = /a+/g;

let respond = myStr.match(regexC);

console.log(respond); //[ 'aa' ]
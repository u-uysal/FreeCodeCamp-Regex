// Create a single regex that matches all characters that are not a number or a vowel.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig;
let result = quoteSample.match(myRegex);

console.log(result);
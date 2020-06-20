let myString = "Hello, World!";

let myRegex = /Hello/; // no need to quote marks

// regex is case-sensitive. you have to write exact word. For example; not /HELLO/

let result = myRegex.test(myString);

console.log(result); // true
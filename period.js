let humStr = "I'll hum a song";

let hugStr = "Bear hug";

let huRegex = /hu./; //it will match with word which start with "hu"

huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true




let exampleStr = "Let's have fun with regular expressions!";

let unRegex = /.un/; // it matchs all word which is ending with "un"

let result = unRegex.test(exampleStr);

console.log(result);
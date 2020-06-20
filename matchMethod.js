"Hello, World!".match(/Hello/);

// Returns ["Hello"]

let ourStr = "Regular expressions";

let ourRegex = /expressions/;

ourStr.match(ourRegex);

// Returns ["expressions"]

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);

/regex/.test('string');




// To search or extract a pattern more than once, you can use the "g" flag

let repeatRegex = /Repeat/g;

testStr.match(repeatRegex);

// Returns ["Repeat", "Repeat", "Repeat"]


let twinkleStar = "Twinkle, twinkle, little star";

let starRegex = /twinkle/ig;

let result = twinkleStar.match(starRegex);


console.log(result); //[ 'Twinkle', 'twinkle' ] => it is array
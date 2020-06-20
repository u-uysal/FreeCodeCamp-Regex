"Hello, World!".match(/Hello/);

// Returns ["Hello"]

let ourStr = "Regular expressions";

let ourRegex = /expressions/;

ourStr.match(ourRegex);

// Returns ["expressions"]

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);

/regex/.test('string');
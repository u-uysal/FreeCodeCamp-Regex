let petString = "James has a pet cat.";

let petRegex = /dog|cat|bird|fish/; // it returns true if they match with one of the different possibilities

let result = petRegex.test(petString);

console.log(result); //true
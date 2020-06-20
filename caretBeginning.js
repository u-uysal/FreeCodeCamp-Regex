let firstString = "Ricky is first and can be found.";

let firstRegex = /^Ricky/;

firstRegex.test(firstString);

// Returns true

let notFirst = "You can't find Ricky now.";

firstRegex.test(notFirst);

// Returns false
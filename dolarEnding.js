let theEnding = "This is a never ending story";

let storyRegex = /story$/;

storyRegex.test(theEnding);

// Returns true

let noEnding = "Sometimes a story will have to end";

storyRegex.test(noEnding);

// Returns false
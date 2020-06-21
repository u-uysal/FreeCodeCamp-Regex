/* You can search
for whitespace using\ s, which is a lowercase s.This pattern not only
 matches whitespace, but also carriage
return, tab, form feed, and new line characters. */


let whiteSpace = "Whitespace. Whitespace everywhere!"

let spaceRegex = /\s/g;

// /\S/g match non-whitespace characters

whiteSpace.match(spaceRegex);
// Returns [" ", " "]
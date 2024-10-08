'use strict';

// Challenge 1 - Capitalize the first letter of a string.
function capitalize(word) {
    if (word.length === 0)
        return word;
    return word[0].toUpperCase() + word.slice(1);
}
// console.log("Challenge 1");
// console.log(capitalize("good dog!"));
// Challenge 2 - Makes all characters uppercase
function upperCase(word) {
    if (word.length === 0)
        return word;
    return word.toUpperCase();
}
// console.log("Challenge 2");
// console.log(upperCase("good dog!"));
// Challenge 3 - Make first character of each word uppercase
function capitalizeWords(sentence) {
    if (sentence.trim().length === 0)
        return sentence;
    return sentence
        .split(" ")
        .map(function (word) {
        if (word && word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return "";
    })
        .join(" ")
        .trim();
}
// console.log("Challenge 3");
// console.log(capitalizeWords("that's a really good and cool dog!"));
// Challenge 4 - Remove extra spaces from a string
function removeExtraSpaces(sentence) {
    return sentence
        .trim()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .join(" ");
}
// console.log("Challenge 4");
// console.log(removeExtraSpaces("Hello   Dog!"));
// console.log(removeExtraSpaces("This is a another   test!"));
// Challenge 5 - 
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebabCase(sentence) {
    return sentence
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .join("-");
}
// console.log("Challenge 5");
// console.log(kebabCase("Hello   Dog!"));
// Challenge 6
// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(sentence) {
    return sentence
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .join("_");
}
// console.log("Challenge 6");
// console.log(snakeCase("Hello   Dog!"));
// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(sentence) {
    return sentence
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .map(function (word, index) {
        return index === 0
            ? word.charAt(0).toLowerCase() + word.slice(1)
            : word.charAt(0).toUpperCase() + word.slice(1);
    })
        .join("");
}
// console.log("Challenge 7");
// console.log(camelCase("Hello   Dog from the other side of the neighborhood!"));
// Challenge 8
// shift() this method will take the first character of a string and move to the end of a string:
//Example: Hello World -> ello WorldH
function shift(sentence) {
    if (sentence.length === 0)
        return sentence;
    return sentence.slice(1) + sentence[0];
}
// console.log("Challenge 8");
// console.log(shift("Hello Dog"));
// Challenge 9
//makeHashTag(str) - This function should convert the given string to a hash tag. 
//A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
function makeHashTag(str) {
    return '#' + str
        .split(' ')
        .filter(function (word) { return word.length > 0; })
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join('');
}
// console.log("Challenge 9");
// console.log(makeHashTag("Hello Dog"));
// Challenge 10
// isEmpty(str) - Returns true if the given string is empty or contains only whitespace. 
//White space includes: spaces, line returns, and tabs. 
//These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
function isEmpty(str) {
    return !/\S/.test(str);
}

exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.capitalizeWords = capitalizeWords;
exports.isEmpty = isEmpty;
exports.kebabCase = kebabCase;
exports.makeHashTag = makeHashTag;
exports.removeExtraSpaces = removeExtraSpaces;
exports.shift = shift;
exports.snakeCase = snakeCase;
exports.upperCase = upperCase;

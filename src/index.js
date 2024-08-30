// Challenge 1 - Capitalize the first letter of a string.

function capitalize(word) {
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1);
}

console.log("Challenge 1");
console.log(capitalize("good dog!"));

// Challenge 2 - Makes all characters uppercase

function upperCase(word) {
  if (word.length === 0) return word;
  return word.toUpperCase();
}

console.log("Challenge 2");
console.log(upperCase("good dog!"));

// Challenge 3 - Make first character of each word uppercase

function capitalizeWords(sentence) {
  if (sentence.length === 0) return sentence;
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log("Challenge 3");
console.log(capitalizeWords("that's a really good and cool dog!"));

module.exports = {
  capitalize,
  upperCase,
  capitalizeWords,
};
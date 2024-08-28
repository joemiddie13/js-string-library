// Challenge 1 - Capitalize the first letter of a string.

function capitalize(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("good dog!"));
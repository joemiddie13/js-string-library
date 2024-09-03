const { capitalize, upperCase, capitalizeWords, removeExtraSpaces } = require('./index');

describe('String Library Tests', () => {
    // Test for capitalize function - Challenge 1
    test('capitalize should capitalize the first letter of a string', () => {
        expect(capitalize("hello world")).toBe("Hello world");
        expect(capitalize("good dog!")).toBe("Good dog!");
        expect(capitalize("")).toBe("");
    });

    // Test for upperCase function
    test('upperCase should make all characters uppercase', () => {
        expect(upperCase("hello world")).toBe("HELLO WORLD");
        expect(upperCase("good dog!")).toBe("GOOD DOG!");
        expect(upperCase("")).toBe("");
    });

    // Test for capitalizeWords function - Challenge 3
    test('capitalizeWords should make the first character of each word uppercase', () => {
        expect(capitalizeWords("that's a really good and cool dog!")).toBe("That's A Really Good And Cool Dog!");
        expect(capitalizeWords("")).toBe("");
    });

    // Test for removeExtraSpaces function - Challenge 4
    test('removeExtraSpaces should remove extra spaces from a string', () => {
        expect(removeExtraSpaces("Hello   Dog!")).toBe("Hello Dog!");
        expect(removeExtraSpaces("This is a another   test!")).toBe("This is a another test!");
        expect(removeExtraSpaces("")).toBe("");
    });
});
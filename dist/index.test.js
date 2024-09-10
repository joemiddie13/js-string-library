"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('String Library Tests', () => {
    // Test for capitalize function - Challenge 1
    test('capitalize should capitalize the first letter of a string', () => {
        expect((0, index_1.capitalize)("hello world")).toBe("Hello world");
        expect((0, index_1.capitalize)("good dog!")).toBe("Good dog!");
        expect((0, index_1.capitalize)("")).toBe("");
    });
    // Test for upperCase function
    test('upperCase should make all characters uppercase', () => {
        expect((0, index_1.upperCase)("hello world")).toBe("HELLO WORLD");
        expect((0, index_1.upperCase)("good dog!")).toBe("GOOD DOG!");
        expect((0, index_1.upperCase)("")).toBe("");
    });
    // Test for capitalizeWords function - Challenge 3
    test('capitalizeWords should make the first character of each word uppercase', () => {
        expect((0, index_1.capitalizeWords)("that's a really good and cool dog!")).toBe("That's A Really Good And Cool Dog!");
        expect((0, index_1.capitalizeWords)("")).toBe("");
    });
    // Test for removeExtraSpaces function - Challenge 4
    test('removeExtraSpaces should remove extra spaces from a string', () => {
        expect((0, index_1.removeExtraSpaces)("Hello   Dog!")).toBe("Hello Dog!");
        expect((0, index_1.removeExtraSpaces)("This is a another   test!")).toBe("This is a another test!");
        expect((0, index_1.removeExtraSpaces)("")).toBe("");
    });
    // Test for kebabCase function - Challenge 5
    test('kebabCase should remove extra spaces and replace spaces with the hyphen "-", and makes all characters lowercase', () => {
        expect((0, index_1.kebabCase)("Hello   Dog!")).toBe("hello-dog!");
        expect((0, index_1.kebabCase)("This is a another   test!")).toBe("this-is-a-another-test!");
        expect((0, index_1.kebabCase)("")).toBe("");
    });
    // Test for snakeCase function - Challenge 6
    test('snakeCase should remove extra spaces and replace spaces with the underscore "_", and makes all characters lowercase', () => {
        expect((0, index_1.snakeCase)("Hello   Dog!")).toBe("hello_dog!");
        expect((0, index_1.snakeCase)("This is a another   test!")).toBe("this_is_a_another_test!");
        expect((0, index_1.snakeCase)("")).toBe("");
    });
    // Test for camelCase function - Challenge 7
    test('camelCase should remove extra spaces and replace spaces with the underscore "_", and makes all characters lowercase', () => {
        expect((0, index_1.camelCase)("Hello   Dog!")).toBe("helloDog!");
        expect((0, index_1.camelCase)("This is a another   test!")).toBe("thisIsAAnotherTest!");
        expect((0, index_1.camelCase)("")).toBe("");
    });
    // Test for shift function - Challenge 8
    test('shift should take the first character of a string and move to the end of a string', () => {
        expect((0, index_1.shift)("Hello World")).toBe("ello WorldH");
        expect((0, index_1.shift)("This is a another test!")).toBe("his is a another test!T");
        expect((0, index_1.shift)("")).toBe("");
    });
    // Test for makeHashTag function - Challenge 9
    test('makeHashTag should convert a string to a hash tag', () => {
        expect((0, index_1.makeHashTag)("Hello Dog")).toBe("#HelloDog");
        expect((0, index_1.makeHashTag)("This is a another test")).toBe("#ThisIsAAnotherTest");
    });
    // Test for isEmpty function - Challenge 10
    test('isEmpty should return true if the string is empty or contains only whitespace', () => {
        expect((0, index_1.isEmpty)("")).toBe(true);
        expect((0, index_1.isEmpty)(" ")).toBe(true);
        expect((0, index_1.isEmpty)("Hello")).toBe(false);
    });
});

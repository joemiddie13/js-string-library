const { capitalize, upperCase, capitalizeWords, removeExtraSpaces, kebabCase, snakeCase, camelCase, shift } = require('./index');

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

    // Test for kebabCase function - Challenge 5
    test('kebabCase should remove extra spaces and replace spaces with the hyphen "-", and makes all characters lowercase', () => {
        expect(kebabCase("Hello   Dog!")).toBe("hello-dog!");
        expect(kebabCase("This is a another   test!")).toBe("this-is-a-another-test!");
        expect(kebabCase("")).toBe("");
    });

    // Test for snakeCase function - Challenge 6
    test('snakeCase should remove extra spaces and replace spaces with the underscore "_", and makes all characters lowercase', () => {
        expect(snakeCase("Hello   Dog!")).toBe("hello_dog!");
        expect(snakeCase("This is a another   test!")).toBe("this_is_a_another_test!");
        expect(snakeCase("")).toBe("");
    });

    // Test for camelCase function - Challenge 7
    test('camelCase should remove extra spaces and replace spaces with the underscore "_", and makes all characters lowercase', () => {
        expect(camelCase("Hello   Dog!")).toBe("helloDog!");
        expect(camelCase("This is a another   test!")).toBe("thisIsAAnotherTest!");
        expect(camelCase("")).toBe("");
    });

    // Test for shift function - Challenge 8
    test('shift should take the first character of a string and move to the end of a string', () => {
        expect(shift("Hello World")).toBe("ello WorldH");
        expect(shift("This is a another test!")).toBe("his is a another test!T");
        expect(shift("")).toBe("");
    });
});
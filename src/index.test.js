const { capitalize } = require('./index');

describe('String Library Tests', () => {
    // Test for capitalize function
    test('capitalize should capitalize the first letter of a string', () => {
        expect(capitalize("hello world")).toBe("Hello world");
        expect(capitalize("good dog!")).toBe("Good dog!");
        expect(capitalize("")).toBe("");
    });
});
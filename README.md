# string-lib-rocko
https://www.npmjs.com/package/string-lib-rocko

A comprehensive TypeScript library for string manipulation functions.

## Overview

The `string-lib-rocko` library provides a collection of utility functions for common string manipulations. This library is designed to simplify string handling in JavaScript and TypeScript applications, making it easier to perform operations such as capitalization, case conversion, whitespace management, and more.

## Installation

To install the library, you can use npm:

```bash
npm install string-lib-rocko
```

## Usage


## Usage

You can import the functions you need from the library as follows:

```typescript
import { capitalize, upperCase, capitalizeWords, removeExtraSpaces, kebabCase, snakeCase, camelCase, shift, makeHashTag, isEmpty } from 'string-lib-rocko';
```


## API Reference

### 1. `capitalize(word: string): string`

Capitalizes the first letter of a given string.

**Example:**

```typescript
const word = 'hello';
const capitalizedWord = capitalize(word);
// capitalizedWord will be 'Hello'
```

### 2. `upperCase(word: string): string`

Converts the entire string to uppercase.

**Example:**

```typescript
const word = 'Hello';
const uppercasedWord = upperCase(word);
// uppercasedWord will be 'HELLO'
```

### 3. `capitalizeWords(sentence: string): string`

Capitalizes the first letter of each word in a given sentence.

**Example:**

```typescript
capitalizeWords("that's a really good and cool dog!")
// "That's A Really Good And Cool Dog!"
```

### 4. `removeExtraSpaces(sentence: string): string`

Removes extra spaces from a given string.

**Example:**

```typescript
removeExtraSpaces("Hello   Dog!")
// "Hello Dog!"
```

### 5. `kebabCase(word: string): string`

Converts a string to kebab case.

**Example:**

```typescript
kebabCase("Hello Dog!")
// "hello-dog"
```

### 6. `snakeCase(word: string): string`

Converts a string to snake case.

**Example:**

```typescript
snakeCase("Hello Dog!")
// "hello_dog"
```

### 7. `camelCase(word: string): string`

Converts a string to camel case (no spaces, no special characters, first letter lowercase)

**Example:**

```typescript
camelCase("Hello Dog!")
// "helloDog"
```

### 8. `shift(word: string): string`

Moves the first character of the string to the end of the string.

**Example:**

```typescript
shift("Hello Dog!")
// "ello Dog!H"
```

### 9. `makeHashTag(word: string): string`

Converts a string to a hashtag (first letter uppercase, no spaces, no special characters)

**Example:**

```typescript
makeHashTag("Hello Dog!")
// "#HelloDog"

### 10. `isEmpty(word: string): boolean`

Checks if a string is empty or contains only whitespace characters.

**Example:**

```typescript
isEmpty("Hello Dog!")
// false
```

## Development

To set up the development environment, follow these steps:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Build the project: `npm run build`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
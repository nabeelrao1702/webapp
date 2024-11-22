# @nabeelrao1702/string-utils

A lightweight JavaScript library providing useful string manipulation utilities.

## Installation

bash
npm install @nabeelrao1702/string-utils


## Usage

javascript
const stringUtils = require('@nabeelrao1702/string-utils');

// Capitalize words
console.log(stringUtils.capitalizeWords('hello world')); // Hello World

// Reverse string
console.log(stringUtils.reverse('hello')); // olleh

// Remove extra spaces
console.log(stringUtils.removeExtraSpaces('hello   world')); // hello world


## API

### capitalizeWords(str)
Capitalizes the first letter of each word in a string.

### reverse(str)
Reverses a string.

### removeExtraSpaces(str)
Removes extra spaces from a string.

## License
MIT

## Author
Nabeel Ahmad (nabeelrao1702)
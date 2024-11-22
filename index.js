/**
 * Collection of string utility functions
 */

/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The input string
 * @returns {string} The transformed string
 */
const capitalizeWords = (str) => {
    if (typeof str !== 'string') return '';
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

/**
 * Reverses a string
 * @param {string} str - The input string
 * @returns {string} The reversed string
 */
const reverse = (str) => {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
};

/**
 * Removes extra spaces from a string
 * @param {string} str - The input string
 * @returns {string} The cleaned string
 */
const removeExtraSpaces = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/\s+/g, ' ').trim();
};

module.exports = {
    capitalizeWords,
    reverse,
    removeExtraSpaces
};

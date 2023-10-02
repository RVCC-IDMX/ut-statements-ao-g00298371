/*
 * stmnts-06.js
 * Language: javascript
 * Test: tests/stmnts-06.test.js
 * Path: src/stmnts-06.js
 * Boolean expressions for strings
 */

/**
 * Returns a boolean indicating whether the given value is a string
 * @param {*} str - the value to check is it is a string
 * @returns {boolean} true if str is a string
 */
function isString(str) {
  // write your code here & return
}

/**
 * Returns a boolean indicating whether the given value an empty string
 * @param {string} str - the string to check
 * @returns {boolean}  - true if str is blank (empty)
 */
function isBlank(str) {
  // write your code here & return
}

/**
 * Creates a new string by concatenating the given strings
 * @param {string} name - the name of the person
 * @param {string} num - the number to check;
 *  if it is 0, the string starts with 'Hello '
 *  otherwise, the string starts with 'Bye '
 * @returns {string} - the name of the person
 */
function sayHelloOrBye(name, num) {
  // write your code here & return
}

/**
 * Checks if 2 strings have the same value, case sensitive
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {boolean} - true if the strings are the same, false otherwise

 */
function compareStrings(str1, str2) {
  // write your code here & return
}

module.exports = {
  isString,
  isBlank,
  sayHelloOrBye,
  compareStrings,
};

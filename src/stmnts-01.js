/*
 * stmnts-01.js
 * Language: javascript
 * Test: tests/stmnts-01.test.js
 * Path: src/stmnts-01.js
 *
 * Arithmetic
 */

/**
 * Calculates the next integer as if you were counting up by 1
 * @param {integer} int - The integer
 * @returns {integer} - the next integer as if you were counting up by 1
 */
function nextInteger(int) {
  return int + 1;
}

/**
 * Calculates the product of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The result of the multiplication
 */
function times(a, b) {
  return a * b;
}

/**
 * Converts the number of minutes into seconds
 * @param {number} minutes - the number of minutes to convert
 * @returns {number} - the number of seconds
 */
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

/**
 * Converts the number of hours into seconds
 * @param {number} hours - the number of hours to convert
 * @returns {number} - the number of seconds
 */
function convertHoursToSeconds(hours) {
  return hours * 3600;
}

module.exports = {
  nextInteger,
  times,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};

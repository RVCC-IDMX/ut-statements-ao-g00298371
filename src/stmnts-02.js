/*
 * stmnts-02.js
 * Language: javascript
 * Test: tests/stmnts-02.test.js
 * Path: src/stmnts-02.js
 * Arithmetic Operators

 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number to calculate
 * @param {number} b - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function sum(a, b) {
  return a + b;
}

/**
 * Calculates the sum of two numbers (even if they are passed as strings)
 * @param {number|string} x - First number to calculate
 * @param {number|string} y - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function betterSum(x, y) {
  // Using parseFloat to convert strings to numbers
  const numX = typeof x === 'string' ? parseFloat(x) : x;
  const numY = typeof y === 'string' ? parseFloat(y) : y;

  // Calculate the sum
  return numX + numY;
}

/**
 * Calculates the remainder of two numbers, the first divided by the second
 * @param {number} number - the number to be divided
 * @param {number} divisor - the divisor of the number
 * @returns {number} - the remainder of the number and the divisor
 *
 *
 * ? computes the first operand modulo the second operand
 */
function remainder(number, divisor) {
  return number % divisor;
}

module.exports = {
  sum,
  betterSum,
  remainder,
};

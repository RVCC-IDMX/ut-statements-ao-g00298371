/* eslint-disable no-undef */
const {
  isString,
  isBlank,
  sayHelloOrBye,
  compareStrings,
} = require('../src/stmnts-06');

test('isString', () => {
  expect(isString('hello')).toBe(true);
  expect(isString('1')).toBe(true);
  expect(isString('')).toBe(true);
  expect(isString(1)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});

test('isBlank', () => {
  expect(isBlank('')).toBe(true);
  expect(isBlank(' ')).toBe(false);
  expect(isBlank(32)).toBe(false);
});

test('sayHelloOrBye', () => {
  expect(sayHelloOrBye('Woody', 0)).toBe('Hello Woody');
  expect(sayHelloOrBye('Buzz Lightyear', 1)).toBe('Bye Buzz Lightyear');
});

test('compareStrings', () => {
  expect(compareStrings('hello', 'hello')).toBe(true);
  expect(compareStrings('hello', 'world')).toBe(false);
  expect(compareStrings('hello', 'hello world')).toBe(false);
  expect(compareStrings('Hello', 'hello')).toBe(false);
});

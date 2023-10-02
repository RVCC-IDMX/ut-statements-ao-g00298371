/* eslint-disable no-undef */
const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/stmnts-04');

test('fahrenheitToCelsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
  expect(fahrenheitToCelsius(212)).toBe(100);
  expect(fahrenheitToCelsius(0)).toBe(-17.78);
  expect(fahrenheitToCelsius(40.25)).toBe(4.58);
});

test('celsiusToFahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(100)).toBe(212);
  expect(celsiusToFahrenheit(-17.78)).toBe(-0);
  expect(celsiusToFahrenheit(20.25)).toBe(68.45);
});

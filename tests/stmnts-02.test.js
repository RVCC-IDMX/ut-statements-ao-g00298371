/* eslint-disable no-undef */
const { sum, betterSum, remainder } = require('../src/stmnts-02');

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 55)).toBe(54);
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, -1)).toBe(-1);
  expect(sum(1, -1)).toBe(0);
});

test('betterSum', () => {
  expect(betterSum('1', '2')).toBe(3);
  expect(betterSum('-1', '55')).toBe(54);
  expect(betterSum('0', '0')).toBe(0);
  expect(betterSum(0, '-1')).toBe(-1);
});

test('remainder', () => {
  expect(remainder(22, 2)).toBe(0);
  expect(remainder(5, 2)).toBe(1);
  expect(remainder(179, 3)).toBe(2);
  expect(remainder(193, 11)).toBe(6);
  expect(remainder(0, 0)).toBeNaN();
});

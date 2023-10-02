/* eslint-disable no-undef */
const {
  logicalAnd,
  logicalOr,
  invertBoolean,
  numberOfOdds,
  gradeGenerator,
  getGrade,
  addUpTheNumbers,
} = require('../src/stmnts-07');

test('logicalAnd', () => {
  expect(logicalAnd(true, true)).toBe(true);
  expect(logicalAnd(true, false)).toBe(false);
  expect(logicalAnd(false, true)).toBe(false);
  expect(logicalAnd(false, false)).toBe(false);
});

test('logicalOr', () => {
  expect(logicalOr(true, true)).toBe(true);
  expect(logicalOr(true, false)).toBe(true);
  expect(logicalOr(false, true)).toBe(true);
  expect(logicalOr(false, false)).toBe(false);
});

test('invertBoolean', () => {
  expect(invertBoolean(true)).toBe(false);
  expect(invertBoolean(false)).toBe(true);
  expect(invertBoolean(1)).toBe(false);
  expect(invertBoolean(0)).toBe(true);
  expect(invertBoolean('true')).toBe(false);
  expect(invertBoolean('false')).toBe(false);
  expect(invertBoolean(null)).toBe(true);
  expect(invertBoolean(NaN)).toBe(true);
});

test('numberOfOdds', () => {
  expect(numberOfOdds(5)).toBe(2);
  expect(numberOfOdds(10)).toBe(5);
  expect(numberOfOdds(15)).toBe(7);
});

test('addUpTheNumbers', () => {
  expect(addUpTheNumbers(0)).toBe(0);
  expect(addUpTheNumbers(5)).toBe(15);
  expect(addUpTheNumbers(10)).toBe(55);
});

test('gradeGenerator', () => {
  expect(gradeGenerator(55)).toBe('F');
  expect(gradeGenerator(60)).toBe('D');
  expect(gradeGenerator(75)).toBe('C');
  expect(gradeGenerator(82)).toBe('B');
  expect(gradeGenerator(99)).toBe('A');
  expect(gradeGenerator(100)).toBe('A');
});

test('getGrade', () => {
  expect(getGrade('Jimmy Neutron', 99)).toBe('Jimmy Neutron got an A');
  expect(getGrade('Angelica Pickles', 87)).toBe('Angelica Pickles got a B');
  expect(getGrade('Yogi The Bear', 75)).toBe('Yogi The Bear got a C');
  expect(getGrade('Patrick Star', 60)).toBe('Patrick Star got a D');
  expect(getGrade('Homer Simpson', 42)).toBe('Homer Simpson got an F');
});

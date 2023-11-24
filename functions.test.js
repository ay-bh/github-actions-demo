// functions.test.js
const { add, subtract, divide } = require('./functions');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('divides 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
});

test('dividing by zero throws an error', () => {
    expect(() => divide(4, 0)).toThrow("Cannot divide by zero");
});

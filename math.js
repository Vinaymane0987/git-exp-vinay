// this file will contain add , sub , mul and div functions.

/**
 * multiply two numbers and returns the result
 * @param {number} a
 * @param {number} b
 * @returns the result
 */
const mul = (a, b) => {
  return a * b;
};

// this function will test whether the multiplication function returns the correct result or not.
const testMul = () => {
  const expected = 10;
  asert(mul(2, 5) === expected, "should return the expected result.");
};

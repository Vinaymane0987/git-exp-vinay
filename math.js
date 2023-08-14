// this file will contain add , sub , mul and div functions.

/**
 * adds to numbers and returns the results.
 * @param {number} a 
 * @param {number} b 
 * @returns the result
 */
const add = (a , b) => {
    return a + b;
}

/**
 * substract two numbers and returns the result
 * @param {number} a 
 * @param {number} b 
 * @returns the result
 */
const sub = (a , b) => {
    return a - b;
}

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


/**
 * it divides the two numbers and return the result.
 * @param {number} a 
 * @param {number} b 
 * @returns the result
 */
const div = (a , b) => {
    return a / b;
}
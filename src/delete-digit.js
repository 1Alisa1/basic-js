const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');

  let max = 0;

  arr.forEach((current, index) => {
    const newValue = Number(arr.slice(0, index).concat(arr.slice(index + 1)).join(''));
    if(newValue > max) {
      max = newValue;
    }
  }, 0);

  return max;
  //return Number(arr.sort((a, b) => b - a).slice(0, arr.length - 1).join(''));
}

module.exports = {
  deleteDigit
};

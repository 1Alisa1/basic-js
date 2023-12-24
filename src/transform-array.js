const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let arr1 = [...arr];

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'string' && arr1[i].startsWith('--')) {
      if (arr1[i].includes('double')) {
        if (arr1[i].includes('prev')) {
          if (i > 0) {
            arr1[i] = arr1[i - 1];
          } else {
            arr1[i] = '';
          }

        } else {
          if (i + 1 < arr1.length) {
            arr1[i] = arr1[i + 1];
          } else {
            arr1[i] = '';
          }
        }
      } else if(arr1[i].includes('discard')) {
        if (arr1[i].includes('prev')) {
          if (i > 0) {
            arr1[i - 1] = '';
          }
        } else {
          if (i + 1 < arr1.length) {
            arr1[i + 1] = '';
          }
        }
        arr1[i] = '';
      }
    }
  }

  return arr1.filter(el => el !== '');
}

module.exports = {
  transform
};

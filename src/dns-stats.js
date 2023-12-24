const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  const result = {};

  domains
    .map(el => el.split('.'))
    .map(el => {
      const newEl = [...el];
      newEl.reverse();
      return newEl;
    })
    .map(domain => domain.map((el, i) => '.' + domain.slice(0, i + 1).join('.')))
    .forEach(domain => {
      domain.forEach((subdomain, i) => {
        if (Object.keys(result).includes(subdomain)) {
          result[subdomain]++;
        } else {
          result[subdomain] = 1;
        }
      });
    });
  
  return result;
}

module.exports = {
  getDNSStats
};

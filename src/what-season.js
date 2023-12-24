const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  
  let isInvalidDate = false;

  try {
    isInvalidDate = !date.getMonth || typeof date.getMonth !== 'function' || isNaN(date);
  }
  catch(e) {
    isInvalidDate = true;
  }

  if (isInvalidDate)
    throw new Error('Invalid date!');

  const monthNumber = date.getMonth();
  let season;
  if (monthNumber >= 11 || monthNumber <= 1) season = "winter";
  else if (monthNumber >= 2 && monthNumber <= 4) season = "spring";
  else if (monthNumber >= 5 && monthNumber <= 7) season = "summer";
  else season = "autumn";

  return season;
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  _isDirect = true;
  constructor(isDirect) {
    if(isDirect === false) {
      this._isDirect = false;
    }
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let keyIndex = 0;
    let result = "";
    for(let i = 0; i < messageUpper.length; i++) {
      const originalCharCode = messageUpper.charCodeAt(i);
      if(originalCharCode < 65 || originalCharCode > 90) {
        result += String.fromCharCode(originalCharCode);
        continue;
      }

      const shift = keyUpper.charCodeAt(keyIndex) - 65;
      keyIndex++;
      if (keyIndex >= keyUpper.length) keyIndex = 0;

      let newCharCode = originalCharCode + shift;
      if(newCharCode > 90) newCharCode -= 26;

      result += String.fromCharCode(newCharCode);
    }

    if (!this._isDirect) {
      result = [...result].reverse().join("");
    }

    return result;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let keyIndex = 0;
    let result = "";
    for(let i = 0; i < messageUpper.length; i++) {
      const originalCharCode = messageUpper.charCodeAt(i);
      if(originalCharCode < 65 || originalCharCode > 90) {
        result += String.fromCharCode(originalCharCode);
        continue;
      }

      const shift = keyUpper.charCodeAt(keyIndex) - 65;
      keyIndex++;
      if (keyIndex >= keyUpper.length) keyIndex = 0;

      let newCharCode = originalCharCode - shift;
      if(newCharCode < 65) newCharCode += 26;

      result += String.fromCharCode(newCharCode);
    }

    if (!this._isDirect) {
      result = [...result].reverse().join("");
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};

/**
 * First test for Skandia binGo
 * @author Michael Velasco
 * @param {number} size size of binGo list
 * @returns {Object}
 */
const binGo = (size = 100) => {
  return [...Array(size).keys()].reduce((obj, val) => {
    const bin = !((val + 1) % 3) ? 'Bin' : '';
    const go = !((val + 1) % 5) ? (bin ? 'go' : 'Go') : '';
    obj[val + 1] = (bin + go + (bin && go ? '!' : ''));
    return obj;
  }, {});
}

/**
 * Check if a number is prime
 * @author Michael Velasco
 * @param {number} num number to validate
 * @returns {boolean}
 */
 const isPrime = num => {
  const length = Math.sqrt(num);
  return Array.from({ length }, (_, i) => 2+i).some((val) => {
    return num % val === 0;
  }) ? false : (num > 1); 
}

/**
 * Second test for Skandia primeNumbers (list of prime numbers)
 * @author Michael Velasco
 * @param {number} num number to validate
 * @returns {boolean}
 */
const primeNumbers = (size = 50) => {
  return [...Array(size).keys()].reduce((obj, val) => {
    isPrime(val+1) ? obj.push(val+1) : obj;
    return obj;
  }, [2]);
}

/**
 * Third test for Skandia reverseWord (reverse a word by spaces)
 * @author Michael Velasco
 * @param {string} word word to reverse
 * @returns {string}
 */
 const reverseWord = word => word.split(' ').reverse().join(' ');

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
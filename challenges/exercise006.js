/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var total = 0;
  arr.forEach(item => {
    if (item % 3 === 0 || item % 5 === 0) total += item;
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. 
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  // use ... notation instead of split
  for (let index = 0; index < [...str].length; index++) {
    if (!"CGTA".includes([...str][index].toUpperCase())) return false;
  }
  return true; // no invalid characters found
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, 
 * T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) return "Invalid DNA";
  const compDNA = { T: 'A', A: 'T', C: 'G', G: 'C' }
  // use ... notation instead of split
  const result = [...str].map(function (item) {
    return compDNA[item.toUpperCase()];
  });
  return result.join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  // if not a positive integer, not prime
  if (n < 0 || !Number.isInteger(n)) return false;

  // divide n by every number greater than 1 (up to the max possible divisor, which is the square root of n); if a divisor is found, number is not prime
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }
  return true; // no divisors found
};

/**
 * This function should receive a number and return an array filled with n items. 
 * The parameter "fill" should be used as the filler of the array. For example, given parameters 3 
 * and "foo" the resulting array should be:
 * ["foo", "foo", "foo"]
 * 
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createArray = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(n)) return [];
  const result = [];
  for (let index = 0; index < n; index++) {
    result.push(fill);
  }
  return result;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 
 * and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(n)) return [];
  return createArray(n, createArray(n, fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  var numStaff = 0;
  staff.forEach(function (person) {
    // finally worked out how to use map with ES6 arrow notation!
    const personRota = person.rota.map(item => item.toLowerCase());
    if (personRota.includes(day.toLowerCase())) numStaff += 1;
  });
  return numStaff > 2;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createArray,
  createMatrix,
  areWeCovered
};

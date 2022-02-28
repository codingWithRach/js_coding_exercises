const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.indexOf(n) === -1 || nums.indexOf(n) === nums.length - 1)
    return null;
  return nums[nums.indexOf(n) + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    0: (str.match(/0/g) || []).length,
    1: (str.match(/1/g) || []).length,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat([...n.toString()].reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let result = 0;
  arrs.forEach((item) => {
    result += item.reduce((a, b) => a + b, 0);
  });
  return result;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  const result = arr.slice();
  result[0] = arr[arr.length - 1];
  result[arr.length - 1] = arr[0];
  return result;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
      return true;
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // split the string into an array of individual words and remove the punctuation
  const words = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/\W|_/g, ""));

  // populate frequencies
  const frequencies = {};
  words.forEach((word) =>
    frequencies[word] ? (frequencies[word] += 1) : (frequencies[word] = 1)
  );
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};

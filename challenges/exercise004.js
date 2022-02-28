function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // using filter with arrow notation
  return nums.filter((item) => item < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((item) => item.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((item) => item.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((item) => Number.isInteger(item));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((item) => item.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((item) => +Math.sqrt(item).toFixed(2));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((item) => Math.max(...item));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};

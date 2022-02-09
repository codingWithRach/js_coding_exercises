function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // using filter
  const result = nums.filter(function (item) {
    return item < 1;
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // using filter
  const result = names.filter(function (item) {
    return item.substring(0, 1) === char;
  });
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // using filter
  const result = words.filter(function (item) {
    return item.substring(0, 3) === "to ";
  });
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // using filter
  const result = nums.filter(function (item) {
    return Number.isInteger(item);
  });
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // using map
  const result = users.map(function (item) {
    return item.data.city.displayName;
  });
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // using map
  const result = nums.map(function (item) {
    return +Math.sqrt(item).toFixed(2);
  });
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // using filter
  const result = sentences.filter(function (item) {
    return item.toLowerCase().includes(str.toLowerCase());
  });
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // using map
  const result = triangles.map(function (item) {
    return Math.max(...item);
  });
  return result;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

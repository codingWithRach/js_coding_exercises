function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // using forEach loop
  var result = [];
  nums.forEach(function (item) {
    if (item < 1) result.push(item);
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // using forEach loop
  var result = [];
  names.forEach(function (item) {
    if (item.substring(0, 1) === char) result.push(item);
  });
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // using forEach loop
  var result = [];
  words.forEach(function (item) {
    if (item.substring(0, 3) === "to ") result.push(item);
  });
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // using forEach loop
  var result = [];
  nums.forEach(function (item) {
    if (Number.isInteger(item)) result.push(item);
  });
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // using forEach loop
  var result = [];
  users.forEach(function (item) {
    result.push(item.data.city.displayName);
  });
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // using forEach loop
  var result = [];
  nums.forEach(function (item) {
    result.push(+Math.sqrt(item).toFixed(2));
  });
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // using forEach loop
  var result = [];
  sentences.forEach(function (item) {
    if (item.toLowerCase().includes(str.toLowerCase())) result.push(item);
  });
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // using forEach loop
  var result = [];
  triangles.forEach(function (item) {
    result.push(Math.max(...item));
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

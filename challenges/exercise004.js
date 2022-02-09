function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // using for loop
  var result = [];
  for (let index = 0; index < nums.length; ++index) {
    if (nums[index] < 1) result.push(nums[index]);
  }
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // using for loop
  var result = [];
  for (let index = 0; index < names.length; ++index) {
    if (names[index].substring(0, 1) === char) result.push(names[index]);
  }
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // using for loop
  var result = [];
  for (let index = 0; index < words.length; ++index) {
    if (words[index].substring(0, 3) === "to ") result.push(words[index]);
  }
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // using for loop
  var result = [];
  for (let index = 0; index < nums.length; ++index) {
    if (Number.isInteger(nums[index])) result.push(nums[index]);
  }
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // using for loop
  var result = [];
  for (let index = 0; index < users.length; ++index) {
    result.push(users[index].data.city.displayName);
  }
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // using for loop
  var result = [];
  for (let index = 0; index < nums.length; ++index) {
    result.push(+Math.sqrt(nums[index]).toFixed(2));
  }
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // using for loop
  var result = [];
  for (let index = 0; index < sentences.length; ++index) {
    if (sentences[index].toLowerCase().includes(str.toLowerCase())) result.push(sentences[index]);
  }
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // using for loop
  var result = [];
  for (let index = 0; index < triangles.length; ++index) {
    result.push(Math.max(...triangles[index]));
  }
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

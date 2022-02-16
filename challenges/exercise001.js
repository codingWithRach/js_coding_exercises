function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // replace substring by charAt for single letter
  return word.charAt(0).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // replace substring by charAt for single letter
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // the + in front of the number drops any extra zeros at the end, so it only uses as many as needed
  return +(originalPrice * (1 + vatRate / 100)).toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return +(originalPrice * (1 - reduction / 100)).toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // use ternary notation
  return str.length % 2 === 0
    ? str.substring(str.length / 2 - 1, str.length / 2 + 1)
    : str.substring((str.length + 1) / 2 - 1, (str.length + 1) / 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return [...word].reverse().join("");
}

function reverseAllWords(words) {
  // replace for loop by ES6 arrow notation
  return words.map((word) => reverseWord(word));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // replace forEach loop by ES6 arrow notation
  return users.filter((user) => user.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const sum = scores.reduce((a, b) => a + b, 0);
  return +(sum / scores.length).toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result = "";
  if (n % 3 === 0) result += "fizz";
  if (n % 5 === 0) result += "buzz";
  // use ternary operator
  return result === "" ? n : result;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};

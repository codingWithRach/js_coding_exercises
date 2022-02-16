function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
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
  // if the length of the string is even return the 2 middle characters
  if (str.length % 2 == 0)
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  // otherwise return the middle character
  return str.substring((str.length + 1) / 2 - 1, (str.length + 1) / 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return [...word].reverse().join("");
}

function reverseAllWords(words) {
  for (let index = 0; index < words.length; ++index) {
    words[index] = reverseWord(words[index]);
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let numUsers = 0;
  users.forEach((user) => {
    if (user.type === "Linux") ++numUsers;
  });
  return numUsers;
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
  if (result === "") return n;
  return result;
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

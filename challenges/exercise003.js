function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  for (let index = 0; index < nums.length; ++index) {
    nums[index] = Math.pow(nums[index], 2);
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var camel = "";
  for (let index = 0; index < words.length; ++index) {
    if (index === 0) camel += words[index];
    else camel += words[index].substring(0, 1).toUpperCase() + words[index].substring(1);
  }
  return camel;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var numSubjects = 0;
  for (let index = 0; index < people.length; ++index) {
    numSubjects += people[index].subjects.length;
  }
  return numSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let index = 0; index < menu.length; ++index) {
    if (menu[index].ingredients.includes(ingredient)) return true;
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var result = [];
  for (let index = 0; index < arr1.length; ++index) {
    if (arr2.includes(arr1[index]) && !result.includes(arr1[index])) result.push(arr1[index]);
  }
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

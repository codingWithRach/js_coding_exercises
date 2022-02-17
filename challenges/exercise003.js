function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words
    .map((word) => {
      return word === words[0]
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let numSubjects = 0;
  people.forEach((person) => (numSubjects += person.subjects.length));
  return numSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (
    menu.filter((menuItem) => menuItem.ingredients.includes(ingredient))
      .length > 0
  );
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // the Set operator removes the duplicates
  return [...new Set(arr1.filter((num) => arr2.includes(num)))].sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};

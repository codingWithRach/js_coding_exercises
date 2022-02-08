function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Format Document removed spaces surrounding ==
  return arr.filter(x => x == "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Format Document added space in substring method
  return person.address.postCode.substring(0, 1) === "M" && person.address.city === "Manchester";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

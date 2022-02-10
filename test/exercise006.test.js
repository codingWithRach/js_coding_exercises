const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the next number after the given number in the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });
});

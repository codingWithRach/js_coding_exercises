const {
  sumMultiples
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 5, 7, 3, 15])).toEqual(23);
    expect(sumMultiples([-1, -5, -7, -3, -15])).toEqual(-23);
    expect(sumMultiples([3])).toEqual(3);
  });

  test("if there are no numbers that are multiples of 3 or 5, returns 0", () => {
    expect(sumMultiples([1, -2, 7, 8, 1, 13])).toEqual(0);
  });
});

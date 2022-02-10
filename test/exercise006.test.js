const {
  sumMultiples,
  isValidDNA
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

describe("isValidDNA", () => {
  test("returns true for sequences only containing C, G, T or A", () => {
    expect(isValidDNA("CGTA")).toEqual(true);
    expect(isValidDNA("GGCTCAGTT")).toEqual(true);
    expect(isValidDNA(["C"])).toEqual(true);
  });

  test("is not case sensitive", () => {
    expect(isValidDNA("atgccag")).toEqual(true);
    expect(isValidDNA("atGccAg")).toEqual(true);
  });

  test("returns false if sequences contain any character other than C, G, T or A", () => {
    expect(isValidDNA("CGTRA")).toEqual(false);
    expect(isValidDNA("HELLO")).toEqual(false);
    expect(isValidDNA("12345")).toEqual(false);
  });
});

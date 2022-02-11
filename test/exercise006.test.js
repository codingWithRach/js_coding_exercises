const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createArray,
  createMatrix,
  areWeCovered
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

describe("getComplementaryDNA", () => {
  test("returns complementary sequence if valid sequence passed", () => {
    expect(getComplementaryDNA("GGCTCAGTT")).toEqual("CCGAGTCAA");
    expect(getComplementaryDNA("T")).toEqual("A");
  });

  test("handles an invalid sequence appropriately", () => {
    expect(getComplementaryDNA("GGCRTCAGTT")).toEqual("Invalid DNA");
    expect(getComplementaryDNA("3")).toEqual("Invalid DNA");
  });
});

describe("isItPrime", () => {
  test("returns true for prime numbers", () => {
    expect(isItPrime(7)).toEqual(true);
    expect(isItPrime(7919)).toEqual(true);
  });

  test("returns false for non-prime numbers", () => {
    expect(isItPrime(6)).toEqual(false);
    expect(isItPrime(1761)).toEqual(false);
  });

  test("returns false for negative numbers", () => {
    expect(isItPrime(-5)).toEqual(false);
    expect(isItPrime(-8)).toEqual(false);
  });

  test("returns false for non-integers", () => {
    expect(isItPrime(3.2)).toEqual(false);
    expect(isItPrime("6")).toEqual(false);
  });
});

describe("createArray", () => {
  test("returns the expected array when valid parameters passed", () => {
    expect(createArray(3, "foo")).toEqual(["foo", "foo", "foo"]);
  });

  test("returns an empty array when fill is a zero-length string", () => {
    expect(createArray(2, "")).toEqual(["", ""]);
  });

  test("returns an empty array when n is not a positive integer", () => {
    expect(createArray(-1, "bar")).toEqual([]);
    expect(createArray(0, "bar")).toEqual([]);
    expect(createArray(4.6, "bar")).toEqual([]);
  });
});

describe("createMatrix", () => {
  test("returns the expected matrix when valid parameters passed", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
  });

  test("returns an empty matrix when fill is a zero-length string", () => {
    expect(createMatrix(2, "")).toEqual([
      ["", ""],
      ["", ""]
    ]);
  });

  test("returns an empty array when n is not a positive integer", () => {
    expect(createMatrix(-1, "bar")).toEqual([]);
    expect(createMatrix(0, "bar")).toEqual([]);
    expect(createMatrix(4.6, "bar")).toEqual([]);
  });
});

describe("areWeCovered", () => {
  const staff = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Rachel", rota: [] },
    { name: "John", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { name: "Matt", rota: ["wednesday", "thursday", "FRIDAY"] }
  ]

  test("returns true if there are enough staff", () => {
    expect(areWeCovered(staff, "Tuesday")).toEqual(true);
  });

  test("is not case sensitive", () => {
    expect(areWeCovered(staff, "Wednesday")).toEqual(true);
    expect(areWeCovered(staff, "friday")).toEqual(true);
  });

  test("returns false if there are not enough staff", () => {
    expect(areWeCovered(staff, "Monday")).toEqual(false);
  });
});

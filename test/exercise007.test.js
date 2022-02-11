const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns sum of digits for positive integer", () => {
        expect(sumDigits(123)).toEqual(6);
    });
    test("returns sum of digits for negative integer", () => {
        expect(sumDigits(-40556)).toEqual(-20);
    });
    test("returns 0 for zero", () => {
        expect(sumDigits(0)).toEqual(0);
    });
    test("returns NaN for a non-integer number", () => {
        expect(sumDigits(74.32)).toEqual(NaN);
    });
});

describe("createRange", () => {
    test("returns valid array when valid parameters passed", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(12, 2, -3)).toEqual([12, 9, 6, 3]);
        expect(createRange(-4, -10, -2)).toEqual([-4, -6, -8, -10]);
        expect(createRange(-10, -4, 3)).toEqual([-10, -7, -4]);
    });
    test("returns valid array when step is omitted", () => {
        expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
    });
    test("returns valid array when start and end are the same", () => {
        expect(createRange(2, 2, 2)).toEqual([2]);
        expect(createRange(5, 5, -1)).toEqual([5]);
    });
    test("returns empty array if start, end or step are non-integer values", () => {
        expect(createRange(4.6, 8, 2)).toEqual([]);
        expect(createRange(4, 8.1, 2)).toEqual([]);
        expect(createRange(4, 8, 2.7)).toEqual([]);
    });
    test("returns empty array if step is 0", () => {
        expect(createRange(4, 8, 0)).toEqual([]);
    });
    test("returns empty array if positivity of step is not consistent with start and end", () => {
        expect(createRange(4, 8, -2)).toEqual([]);
        expect(createRange(8, 4, 2)).toEqual([]);
    });
});

//STRUCTURE
//describe("NAME OF FUNCTION", () => {
//    test("DESCRIPTION OF TEST", () => {
//        expect(FUNCTIONCALL(PARAMETERS)).toEqual(EXPECTED);
//    });
//});

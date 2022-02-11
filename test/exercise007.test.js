const {
    sumDigits
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

//STRUCTURE
//describe("NAME OF FUNCTION", () => {
//    test("DESCRIPTION OF TEST", () => {
//        expect(FUNCTIONCALL(PARAMETERS)).toEqual(EXPECTED);
//    });
//});

const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
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

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
    {
      username: "rach_m_2685",
      name: "Rachel Miles",
      screenTime: [],
    },
    {
      username: "john_5515",
      name: "John Hobbs",
      screenTime: [
        {
          date: "2019-06-14",
          usage: {},
        },
      ],
    },
    {
      username: "milly_9510",
      name: "Milly Miller",
      screenTime: [
        {
          date: "2019-05-02",
          usage: { mapMyRun: 72, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test("returns the correct array of usernames when date passed that exists in at least one users object", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-05-01")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual([
      "beth_1234",
      "milly_9510",
    ]);
  });
  test("returns empty array when date passed that does not exist in any users object", () => {
    expect(getScreentimeAlertList(users, "2015-05-01")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("returns correct rgb for a valid hexadecimal colour code", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
  });

  test("returns empty string for an invalid hexadecimal colour code", () => {
    expect(hexToRGB("FF1133")).toEqual("");
    expect(hexToRGB("#F1133")).toEqual("");
    expect(hexToRGB("#ZZ1133")).toEqual("");
    expect(hexToRGB("#ZZFF1133")).toEqual("");
  });
});

//STRUCTURE
//describe("NAME OF FUNCTION", () => {
//    test("DESCRIPTION OF TEST", () => {
//        expect(FUNCTIONCALL(PARAMETERS)).toEqual(EXPECTED);
//    });
//});

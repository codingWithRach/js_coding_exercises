/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = (n) => {
  // validate parameters
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) return NaN;

  // determine whether number is positive or negative
  const multiplier = n < 0 ? -1 : 1;

  // return the total as a positive or negative number
  return (
    [...Math.abs(n).toString()].reduce((a, b) => parseInt(a) + parseInt(b)) *
    multiplier
  );
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range.
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  // validate parameters
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1;
  if (!Number.isInteger(start)) return [];
  if (!Number.isInteger(end)) return [];
  if (!Number.isInteger(step)) return [];
  if (step === 0) return [];
  if (start < end && step < 0) return [];
  if (start > end && step > 0) return [];

  // populate array if step is negative or positive
  const result = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) result.push(i);
  } else {
    for (let i = start; i <= end; i += step) result.push(i);
  }
  return result;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100
 * minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const userNames = [];
  users.forEach((user) => {
    const userScreenTime = user.screenTime.filter((item) => item.date === date);
    if (userScreenTime.length > 0) {
      let totalUsage = 0;
      for (let key in userScreenTime[0].usage)
        totalUsage += userScreenTime[0].usage[key];
      if (totalUsage > 100 && !userNames.includes(user.username))
        userNames.push(user.username);
    }
  });
  return userNames;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation,
 * i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green,
 * and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (!(hexStr.substring(0, 1) === "#")) return "";
  if (!(hexStr.length === 7)) return "";

  // check each character is a valid hexadecimal character
  if (
    !(
      [...hexStr.substring(1)].filter((character) =>
        character.match(/^[-+]?[0-9A-Fa-f]*?$/)
      ).length ===
      hexStr.length - 1
    )
  )
    return "";

  // perform conversion
  const hexToDec = (h) => parseInt(h, 16).toString();
  return (
    "rgb(" +
    hexToDec(hexStr.substring(1, 3)) +
    "," +
    hexToDec(hexStr.substring(3, 5)) +
    "," +
    hexToDec(hexStr.substring(5)) +
    ")"
  );
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  // validate board has correct format
  if (!board.length === 3) return null;
  if (!(board.filter((row) => row.length === 3).length === 3)) return null;

  // check each character is a valid hexadecimal character
  board.forEach((row) => {
    row.forEach((square) => {
      if (!(square === "X" || square === "0" || square === null)) return null;
    });
  });

  // create transposed board i.e. swap rows and columns
  const transpose = (board) =>
    board[0].map((col, i) => board.map((row) => row[i]));
  const boards = [board, transpose(board)];

  const players = ["X", "0"];
  let winner = null;
  players.forEach((player) => {
    // check rows in original and transposed boards
    boards.forEach((board) => {
      // check rows
      board.forEach((row) => {
        if (row.filter((square) => square === player).length === 3)
          winner = player;
      });
    });

    // check diagonals
    if (board[1][1] == player) {
      if (
        (board[0][0] === player && board[2][2] === player) ||
        (board[0][2] === player && board[2][0] === player)
      )
        winner = player;
    }
  });

  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
};

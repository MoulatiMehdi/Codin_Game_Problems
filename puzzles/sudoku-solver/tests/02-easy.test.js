/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Easy",
    "input":  [
                  "000700040",
                  "020801900",
                  "000000173",
                  "102006097",
                  "600090001",
                  "970100405",
                  "354000000",
                  "008604030",
                  "010003000"
              ],
    "output":  [
                   "531769248",
                   "427831956",
                   "869425173",
                   "182546397",
                   "645397821",
                   "973182465",
                   "354278619",
                   "798614532",
                   "216953784"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "06-Press-equal-many-times",
    "input":  [
                  "18",
                  "8",
                  "x",
                  "3",
                  "+",
                  "2",
                  "=",
                  "=",
                  "=",
                  "2",
                  "7",
                  "9",
                  "/",
                  "9",
                  "-",
                  "4",
                  "=",
                  "=",
                  "="
              ],
    "output":  [
                   "8",
                   "8",
                   "3",
                   "24",
                   "2",
                   "26",
                   "28",
                   "30",
                   "2",
                   "27",
                   "279",
                   "279",
                   "9",
                   "31",
                   "4",
                   "27",
                   "23",
                   "19"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


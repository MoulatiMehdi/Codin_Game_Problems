/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Multiplication-and-division",
    "input":  [
                  "8",
                  "9",
                  "3",
                  "x",
                  "1",
                  "2",
                  "/",
                  "5",
                  "="
              ],
    "output":  [
                   "9",
                   "93",
                   "93",
                   "1",
                   "12",
                   "1116",
                   "5",
                   "223.2"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


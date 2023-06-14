/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Change-of-opinion",
    "input":  [
                  "8",
                  "2",
                  "1",
                  "x",
                  "3",
                  "-",
                  "/",
                  "9",
                  "="
              ],
    "output":  [
                   "2",
                   "21",
                   "21",
                   "3",
                   "63",
                   "63",
                   "9",
                   "7"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


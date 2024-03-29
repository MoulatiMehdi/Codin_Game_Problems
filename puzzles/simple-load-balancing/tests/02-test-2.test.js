/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Test-2",
    "input":  [
                  "10",
                  "6",
                  "8 9 3 13 12 11 6 9 5 3"
              ],
    "output":  [
                   "8"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


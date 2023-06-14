/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-A-simple-operation",
    "input":  [
                  "7",
                  "2",
                  "5",
                  "+",
                  "6",
                  "-",
                  "7",
                  "="
              ],
    "output":  [
                   "2",
                   "25",
                   "25",
                   "6",
                   "31",
                   "7",
                   "24"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


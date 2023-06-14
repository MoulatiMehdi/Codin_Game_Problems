/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "05-Asymmetric",
    "input":  [
                  "5 7",
                  "1 9 3 1 3 3 3",
                  "9 9 4 1 9 9 9",
                  "1 3 6 9 7 9 1",
                  "3 7 7 5 7 2 7",
                  "9 6 2 3 8 3 3"
              ],
    "output":  [
                   "64"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


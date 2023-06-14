/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Parallel",
    "input":  [
                  "2",
                  "C 20",
                  "D 25",
                  "[ C D ]"
              ],
    "output":  [
                   "11.1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


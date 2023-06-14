/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Much-ado-about-nothing",
    "input":  [
                  "4 4",
                  "0 0 0 0",
                  "0 0 0 0",
                  "0 2 0 0",
                  "0 0 0 0"
              ],
    "output":  [
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


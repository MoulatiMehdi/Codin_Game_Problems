/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Solo-Play",
    "input":  [
                  "20",
                  "1",
                  "Will",
                  "3",
                  "Will -10 10",
                  "Will -5 7",
                  "Will 0 0"
              ],
    "output":  [
                   "Will 30"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


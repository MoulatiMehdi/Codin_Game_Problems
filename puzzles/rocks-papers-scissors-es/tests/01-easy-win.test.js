/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Easy-Win",
    "input":  [
                  "4",
                  "Paper",
                  "Paper",
                  "Paper",
                  "Rock"
              ],
    "output":  [
                   "Scissors",
                   "0"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


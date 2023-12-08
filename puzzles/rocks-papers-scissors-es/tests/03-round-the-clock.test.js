/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Round-The-Clock",
    "input":  [
                  "5",
                  "Rock",
                  "Scissors",
                  "Paper",
                  "Rock",
                  "Rock"
              ],
    "output":  [
                   "Paper",
                   "3"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


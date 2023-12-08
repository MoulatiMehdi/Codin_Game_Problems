/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Draw-Doesn\u0027t-Stop-The-Match",
    "input":  [
                  "7",
                  "Paper",
                  "Rock",
                  "Paper",
                  "Rock",
                  "Paper",
                  "Rock",
                  "Scissors"
              ],
    "output":  [
                   "Paper",
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


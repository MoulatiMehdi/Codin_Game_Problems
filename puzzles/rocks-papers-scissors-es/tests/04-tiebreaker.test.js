/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Tiebreaker",
    "input":  [
                  "10",
                  "Rock",
                  "Scissors",
                  "Scissors",
                  "Scissors",
                  "Paper",
                  "Rock",
                  "Rock",
                  "Rock",
                  "Scissors",
                  "Paper"
              ],
    "output":  [
                   "Rock",
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


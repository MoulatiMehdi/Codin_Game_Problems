/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Easy-(One-Snake)",
    "input":  [
                  "7 7",
                  ".......",
                  ".......",
                  ".......",
                  "\u003c-----o",
                  ".......",
                  ".......",
                  "......."
              ],
    "output":  [
                   "7",
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


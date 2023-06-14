/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-World\u0027s-Hardest-Sudoku",
    "input":  [
                  "800000000",
                  "003600000",
                  "070090200",
                  "050007000",
                  "000045700",
                  "000100030",
                  "001000068",
                  "008500010",
                  "090000400"
              ],
    "output":  [
                   "812753649",
                   "943682175",
                   "675491283",
                   "154237896",
                   "369845721",
                   "287169534",
                   "521974368",
                   "438526917",
                   "796318452"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


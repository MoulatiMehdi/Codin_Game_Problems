/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Circles",
    "input":  [
                  "100",
                  "4",
                  "Will",
                  "Bill",
                  "Jill",
                  "Rekt",
                  "8",
                  "Will -51 0",
                  "Bill 51 0",
                  "Jill 49 2",
                  "Rekt 0 0",
                  "Will 35 35",
                  "Bill -20 -21",
                  "Jill 1 50",
                  "Rekt -13 39"
              ],
    "output":  [
                   "Rekt 25",
                   "Bill 15",
                   "Jill 15",
                   "Will 10"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


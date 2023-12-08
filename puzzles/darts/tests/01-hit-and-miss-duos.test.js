/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Hit-and-Miss-Duos",
    "input":  [
                  "20",
                  "2",
                  "Will",
                  "Jill",
                  "4",
                  "Will 0 0",
                  "Jill 0 0",
                  "Will 20 20",
                  "Jill 0 0"
              ],
    "output":  [
                   "Jill 30",
                   "Will 15"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


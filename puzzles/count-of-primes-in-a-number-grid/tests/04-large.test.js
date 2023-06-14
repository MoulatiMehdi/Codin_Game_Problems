/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Large",
    "input":  [
                  "6 6",
                  "3 1 7 3 3 3",
                  "9 9 5 6 3 9",
                  "1 1 8 1 4 2",
                  "1 3 6 3 7 3",
                  "3 4 9 1 9 9",
                  "3 7 9 3 7 9"
              ],
    "output":  [
                   "78"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


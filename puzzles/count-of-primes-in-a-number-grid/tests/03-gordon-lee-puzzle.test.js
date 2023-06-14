/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Gordon-Lee-puzzle",
    "input":  [
                  "5 5",
                  "3 8 2 1 9",
                  "3 3 7 9 7",
                  "1 9 4 6 9",
                  "9 1 5 7 1",
                  "9 1 7 3 9"
              ],
    "output":  [
                   "50"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


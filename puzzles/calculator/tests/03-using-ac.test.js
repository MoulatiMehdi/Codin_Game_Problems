/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Using-AC",
    "input":  [
                  "10",
                  "3",
                  "/",
                  "4",
                  "AC",
                  "7",
                  "/",
                  "4",
                  "x",
                  "8",
                  "="
              ],
    "output":  [
                   "3",
                   "3",
                   "4",
                   "0",
                   "7",
                   "7",
                   "4",
                   "1.75",
                   "8",
                   "14"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


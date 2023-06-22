/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Test-2",
    "input":  [
                  "10",
                  "ZZZZZZZZZZ",
                  "ZRRRRRRRRZ",
                  "ZRRRRRRRRZ",
                  "ZRRRRRRRRZ",
                  "ZFFFFFFFFZ",
                  "ZDDDDDDDDZ",
                  "ZDDDDDDDDZ",
                  "ZDDDDDDDDZ",
                  "ZDDDDDDDDZ",
                  "ZZZZZZZZZZ"
              ],
    "output":  [
                   "1056"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


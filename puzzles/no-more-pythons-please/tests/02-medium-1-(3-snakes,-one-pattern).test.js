/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Medium-1-(3-Snakes,-One-Pattern)",
    "input":  [
                  "5 7",
                  "*-----*",
                  "|*---*|",
                  "||*-*||",
                  "|||.|||",
                  "vov.ovo"
              ],
    "output":  [
                   "15",
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


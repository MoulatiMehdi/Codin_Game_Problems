/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Combined-(Example-Diagram)",
    "input":  [
                  "3",
                  "A 24",
                  "B 8",
                  "C 48",
                  "[ ( A B ) [ C A ] ]"
              ],
    "output":  [
                   "10.7"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


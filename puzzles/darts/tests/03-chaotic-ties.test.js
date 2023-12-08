/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Chaotic-Ties",
    "input":  [
                  "20",
                  "5",
                  "Eric",
                  "Joe",
                  "Molly",
                  "Louis",
                  "Brandon",
                  "10",
                  "Joe 0 0",
                  "Molly 0 0",
                  "Brandon 0 0",
                  "Eric -50 50",
                  "Louis 50 -50",
                  "Joe 10 10",
                  "Molly -10 10",
                  "Brandon -10 -10",
                  "Eric 5 5",
                  "Louis 0 0"
              ],
    "output":  [
                   "Joe 20",
                   "Molly 20",
                   "Brandon 20",
                   "Eric 15",
                   "Louis 15"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


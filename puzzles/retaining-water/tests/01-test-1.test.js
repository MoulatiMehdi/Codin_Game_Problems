/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Test-1",
    "input":  [
                  "10",
                  "ZZZZZZZZZZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZAAAAAAAAZ",
                  "ZZZZZZZZZZ"
              ],
    "output":  [
                   "1600"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


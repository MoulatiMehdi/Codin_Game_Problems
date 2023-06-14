/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Intermediate/Hard",
    "input":  [
                  "006000050",
                  "003700000",
                  "700035008",
                  "000070012",
                  "000942000",
                  "620080000",
                  "900120003",
                  "000003600",
                  "050000700"
              ],
    "output":  [
                   "816294357",
                   "543718269",
                   "792635148",
                   "438576912",
                   "175942836",
                   "629381475",
                   "964127583",
                   "287453691",
                   "351869724"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Medium-2-(More-than-1-large-snake)",
    "input":  [
                  "6 10",
                  "^o^o^o^o^o",
                  "||||||||||",
                  "||||||||||",
                  "||||||||||",
                  "||||||||||",
                  "ovovovovov"
              ],
    "output":  [
                   "6",
                   "10"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


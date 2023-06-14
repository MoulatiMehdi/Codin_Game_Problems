/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Test-1",
    "input":  [
                  "31",
                  "1111",
                  "1111",
                  "1111",
                  "1111",
                  "1111",
                  "1111",
                  "0111",
                  "1111",
                  "1111",
                  "1111",
                  "1110",
                  "1011",
                  "0011",
                  "0011",
                  "0011",
                  "0101",
                  "0100",
                  "1100",
                  "1100",
                  "1010",
                  "1010",
                  "1011",
                  "0011",
                  "0001",
                  "0001",
                  "0101",
                  "1100",
                  "1100",
                  "1100",
                  "1110",
                  "1011"
              ],
    "output":  [
                   "5",
                   "20L",
                   "27R",
                   "28R"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


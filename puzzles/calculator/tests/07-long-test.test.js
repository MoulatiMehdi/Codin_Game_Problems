/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "07-Long-test",
    "input":  [
                  "26",
                  "7",
                  "9",
                  "x",
                  "-",
                  "7",
                  "+",
                  "AC",
                  "8",
                  "/",
                  "3",
                  "+",
                  "5",
                  "=",
                  "8",
                  "2",
                  "5",
                  "7",
                  "-",
                  "5",
                  "4",
                  "=",
                  "=",
                  "+",
                  "1",
                  "2",
                  "=",
                  ""
              ],
    "output":  [
                   "7",
                   "79",
                   "79",
                   "79",
                   "7",
                   "72",
                   "0",
                   "8",
                   "8",
                   "3",
                   "2.667",
                   "5",
                   "7.667",
                   "8",
                   "82",
                   "825",
                   "8257",
                   "8257",
                   "5",
                   "54",
                   "8203",
                   "8149",
                   "8149",
                   "1",
                   "12",
                   "8161"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


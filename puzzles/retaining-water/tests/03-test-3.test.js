/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Test-3",
    "input":  [
                  "10",
                  "XXXXXXXXXX",
                  "XSSSSRAAAX",
                  "XSSSSRAAAX",
                  "XSSSSRAAAX",
                  "XXXXXCXXXX",
                  "XSSSSCBBBX",
                  "XSSSSCBBBX",
                  "RSSSSCBBBX",
                  "XSSSSCBBBX",
                  "XXXXXXXXXX"
              ],
    "output":  [
                   "449"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


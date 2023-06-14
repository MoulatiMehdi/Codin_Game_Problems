/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-Very-Easy",
    "input":  [
                  "120070560",
                  "507932080",
                  "000001000",
                  "010240050",
                  "308000402",
                  "070085010",
                  "000700000",
                  "080423701",
                  "034010028"
              ],
    "output":  [
                   "123874569",
                   "567932184",
                   "849651237",
                   "916247853",
                   "358196472",
                   "472385916",
                   "291768345",
                   "685423791",
                   "734519628"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


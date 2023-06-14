/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Complex",
    "input":  [
                  "7",
                  "Alfa 1",
                  "Bravo 1",
                  "Charlie 12",
                  "Delta 4",
                  "Echo 2",
                  "Foxtrot 10",
                  "Golf 8",
                  "( Alfa [ Charlie Delta ( Bravo [ Echo ( Foxtrot Golf ) ] ) ] )"
              ],
    "output":  [
                   "2.4"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


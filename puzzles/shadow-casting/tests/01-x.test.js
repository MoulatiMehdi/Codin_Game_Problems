/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "01-X",
    "input":  [
                  "7",
                  "  #     #",
                  "   #   #",
                  "    # #",
                  "     #",
                  "    # #",
                  "   #   #",
                  "  #     #"
              ],
    "output":  [
                   "  #     #",
                   "   #   # -",
                   "    # # - `",
                   "     # - `",
                   "    # # `",
                   "   # - #",
                   "  # - ` #",
                   "   - `   -",
                   "    `     `"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


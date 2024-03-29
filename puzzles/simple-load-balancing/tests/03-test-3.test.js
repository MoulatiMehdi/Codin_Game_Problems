/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-Test-3",
    "input":  [
                  "100",
                  "10000",
                  "59835 83610 3161 5354 76735 23609 10225 151 45589 54045 66226 37966 97448 19239 84354 59929 18448 37232 40826 77590 58718 17839 81280 81303 43422 66613 6231 75814 38519 61859 16194 47099 8499 754 54805 8259 35865 85514 13692 54463 88516 22402 63349 24943 56797 84495 60652 1700 34086 40481 33325 93183 64515 97059 82262 37505 3593 8193 83196 97591 68726 85913 60223 59942 8534 94158 37536 44672 38276 54709 4494 90937 78191 66737 94117 2889 79942 28398 8769 94035 73288 12928 38239 81789 21739 11358 16696 87961 87678 85523 91846 49605 81364 32294 42297 50940 34402 37742 2142 8175"
              ],
    "output":  [
                   "94125"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


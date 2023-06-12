/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = [
    "5",
    "###########",
    "##       ##",
    "##       ##",
    "##       ##",
    "###########"
];
const output = [
    "###########",
    "##-------##-",
    "##-``````##-`",
    "##-`     ##-`",
    "###########-`",
    " -----------`",
    "  ```````````"
];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("02-Square", () => handleTest(output, solve, readline));


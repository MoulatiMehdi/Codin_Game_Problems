/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["10", "6", "8 9 3 13 12 11 6 9 5 3"];
const output = ["8"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("02-Test 2", () => handleTest(output, solve, readline));


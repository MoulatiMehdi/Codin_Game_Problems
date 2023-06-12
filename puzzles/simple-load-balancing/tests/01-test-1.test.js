/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["4", "3", "5 0 2 1"];
const output = ["3"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("01-Test 1", () => handleTest(output, solve, readline));


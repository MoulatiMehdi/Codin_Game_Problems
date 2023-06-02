/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["10", "3", "/", "4", "AC", "7", "/", "4", "x", "8", "="];
const output = ["3", "3", "4", "0", "7", "7", "4", "1.75", "8", "14"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(output, solve, readline));


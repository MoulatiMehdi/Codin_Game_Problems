/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["8", "9", "3", "x", "1", "2", "/", "5", "="];
const output = ["9", "93", "93", "1", "12", "1116", "5", "223.2"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(output, solve, readline));


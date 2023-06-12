/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["7 7", ".......", ".......", ".......", "<-----o", ".......", ".......", ".......", ""];
const output = ["7", "1"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("01 Easy (One Snake)", () => handleTest(output, solve, readline));


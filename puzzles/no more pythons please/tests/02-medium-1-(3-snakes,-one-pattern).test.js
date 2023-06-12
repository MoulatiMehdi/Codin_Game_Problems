/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["5 7", "*-----*", "|*---*|", "||*-*||", "|||.|||", "vov.ovo", ""];
const output = ["15", "1"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("02 Medium 1 (3 Snakes, One Pattern)", () => handleTest(output, solve, readline));


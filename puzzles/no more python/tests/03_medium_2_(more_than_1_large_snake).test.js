/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["6 10", "^o^o^o^o^o", "||||||||||", "||||||||||", "||||||||||", "||||||||||", "ovovovovov", ""];
const output = ["6", "10"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("03 Medium 2 (More than 1 large snake)", () => handleTest(output, solve, readline));


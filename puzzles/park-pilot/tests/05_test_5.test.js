/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["153", "1111", "1111", "0111", "1111", "1111", "1111", "1111", "1011", "0011", "0011", "0010", "0011", "1111", "1111", "1111", "1101", "1100", "0000", "0000", "0000", "0011", "0011", "0011", "0011", "1011", "1000", "1100", "1100", "1100", "0100", "0100", "0000", "1101", "1101", "1011", "1011", "1011", "0110", "0110", "0100", "0111", "1111", "1001", "0001", "0001", "0010", "0010", "0110", "0110", "0111", "0101", "0100", "0000", "0000", "0000", "1010", "1110", "0110", "1110", "1110", "1100", "1000", "1000", "0001", "0011", "0010", "0011", "1111", "1111", "1101", "1101", "1100", "0000", "0000", "0000", "0011", "0111", "1111", "1011", "1011", "1000", "1000", "0000", "0000", "0010", "1011", "1001", "1101", "1101", "1101", "0100", "0100", "0000", "0001", "0001", "0011", "1011", "1011", "1010", "1010", "1000", "0100", "0100", "0100", "0101", "0101", "1001", "1001", "1001", "1010", "1010", "0110", "0110", "0110", "0101", "0101", "0001", "0001", "0001", "0010", "1010", "1010", "1110", "1110", "1100", "0100", "0100", "1000", "1001", "1001", "1111", "1111", "0111", "0110", "0110", "0001", "0001", "0001", "1011", "1011", "1010", "1010", "1010", "0000", "0100", "0100", "0101", "0101", "1101", "1001", "1001", "1000", "1010"];
const output = ["9", "33R", "59L", "60L", "61L", "62L", "94R", "108R", "127L", "151R"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(output, solve, readline));

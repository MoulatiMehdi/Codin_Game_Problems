/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["3", "Alef 30", "Bet 20", "Vet 10", "( Alef [ ( Bet Bet Bet ) ( Vet [ ( Vet Vet ) ( Vet [ Bet Bet ] ) ] ) ] )"];
const output = ["45.0"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(output, solve, readline));


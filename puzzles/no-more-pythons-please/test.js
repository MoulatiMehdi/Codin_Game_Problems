/** @format */

const fs = require("fs");
const solve = require("./main");

const path =
	"D:\\Programming\\Solve_Puzzles\\codin-game-problems\\puzzles\\no more python\\test.json";
fs.readFile(path, "utf-8", (err, data) => {
	if (err) {
		console.error("Error reading File : " + err);
		return;
	}
	const tests = JSON.parse(data).tests;
	const input = tests[1].input;

	solve(() => {
		return input.shift();
	});
});

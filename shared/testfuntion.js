/** @format */

const solve = require("../puzzles/calculator/main");

function handleTest(input, output) {
	let consoleOutput = [];
	const mockedLog = (output) => {
		consoleOutput.push(output.toString());
	};

	// clear output
	consoleOutput = [];
	// Mock console.log
	console.log = mockedLog;

	// Call the function you want to test
	solve(input);

	// Assert the console.log output
	expect(consoleOutput).toEqual(output);

	// Restore console.log
	console.log = console.log;
}

module.exports = handleTest;

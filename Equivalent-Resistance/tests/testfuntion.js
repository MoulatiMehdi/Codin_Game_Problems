/** @format */

let result = "";
const solve = require("../main");

const mockedLog = (output) => {
	result = output.toString();
};

function handleTest(input, output) {
	// clear output
	result = ""
	// Mock console.log
	console.log = mockedLog;

	// Call the function you want to test
	// Assert the console.log output
	solve(input);
	expect(result).toEqual(output);
	// Restore console.log
	console.log = console.log;
}

module.exports = handleTest;

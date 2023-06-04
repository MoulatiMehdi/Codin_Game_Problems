/** @format */
let consoleOutput = "";
const mockedLog = (output) => {
	consoleOutput.push(output.toString());
};

function handleTest(output, solve, readline) {
	// clear output
	consoleOutput = [];
	// Mock console.log
	console.log = mockedLog;

	// Call the function you want to test
	solve(readline);

	// Assert the console.log output
	expect(consoleOutput).toEqual(output);
	console.log = console.log;
}

module.exports = handleTest;

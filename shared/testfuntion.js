/** @format */
let consoleOutput = [];
const mockedLog = (output) => {
	const arr = output.toString().split("\n");
	consoleOutput.push(...arr);
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
}

module.exports = handleTest;

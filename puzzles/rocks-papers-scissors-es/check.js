/** @format */

const fs = require("fs");
const solve = require("./main");

function readline(array) {
	return array.shift();
}
output = "";
const mock = (ans) => {
	output = ans;
};
const backup = console.log;
fs.readFile(__dirname + "\\test.json", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	// all test cases
	try {
		const tests = JSON.parse(data)["tests"];

		// the input of the target case
		if (tests) {
			const test = tests[0];
			// for (let test of tests[0]) {
			console.log(
				"\t".repeat(2),
				"\x1b[1;30;41m",
				"\t" + test.name + "\t"
			);
			console.log("\n");
			console.log(
				"\x1b[1;30;46mInputs         : \x1b[0m",
				"\x1b[1;37m\n" + test.input.join("\n")
			);

			console.log = mock;
			solve(() => readline(test.input));
			console.log = backup;

			console.log(
				"\x1b[1;30;47mYour answer    : \x1b[0m",
				"\x1b[1;37m\n" + output
			);
			console.log(
				"\x1b[1;30;42mCorrect answer : \x1b[0m",
				"\x1b[1;37m\n" + test.output.join("\n")
			);
			console.log("\x1b[1;35m*".repeat(120));
			// }
		} else {
			console.warn("tests variable is empty");
		}
	} catch (err) {
		console.error(err);
	}
});

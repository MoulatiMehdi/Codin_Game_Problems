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
	console.info("Json file loaded");
	// all test cases
	try {
		const tests = JSON.parse(data)["tests"];

		// the input of the target case
		if (tests) {
			const test = tests[0];
			// for (let test of tests[0]) {
			console.log(
				"\t".repeat(5),
				"\xb1[1;30;41m",
				"\t" + test.name + "\t"
			);
			console.log("\n");
			console.log(
				"\xb1[1;30;46mInputs         : \xb1[0m",
				"\xb1[1;37m\n" + test.input.join("\n")
			);

			console.log = mock;
			solve(() => readline(test.input));
			console.log = backup;

			console.log(
				"\xb1[1;30;47mYour answer    : \xb1[0m",
				"\xb1[1;37m\n" + output
			);
			console.log(
				"\xb1[1;30;42mCorrect answer : \xb1[0m",
				"\xb1[1;37m\n" + test.output.join("\n")
			);
			console.log("\xb1[1;35m*".repeat(120));
			// }
		} else {
			console.warn("tests variable is empty");
		}
	} catch (err) {
		console.error(err);
	}
});

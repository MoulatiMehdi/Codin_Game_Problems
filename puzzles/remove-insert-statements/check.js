/** @format */

const fs = require("fs");
const solve = require("./main");

function readline(array) {
	return array.shift();
}
let output = [];
const mock = (ans) => {
	output.push(ans);
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
		if (!tests) {
			throw "Tests Variable Is Empty.";
		}

		const indexes = [6];

		for (let i of indexes) {
			output = [];
			const test = tests[i];
			// for (let test of tests[0]) {
			console.log(
				"\t".repeat(5),
				"\x1b[1;30;41m",
				"\t" + test.name + "\t"
			);
			console.log("\n");
			console.log(
				"\x1b[1;30;46mInputs         : \x1b[0m",
				"\x1b[1;37m\n"
			);
			test.input.forEach((element) => {
				console.log("\x1b[1;37m" + element);
			});

			console.log = mock;
			solve(() => readline(test.input));
			console.log = backup;

			console.log(
				"\x1b[1;30;47mYour answer    : \x1b[0m",
				"\x1b[1;37m\n"
			);
			console.log(output.join("\n"));
			console.log("\x1b[1;30;42mCorrect answer : \x1b[0m", "\x1b[1;37m");
			console.log(test.output.join("\n"));

			let text = "";
			if (test instanceof Array) text = output.join("\n");
			else text = output;
			console.log(test.output.join("\n") === text);
			console.log("\x1b[1;35m*".repeat(120));
			console.info("\n");
			// }
		}
	} catch (err) {
		console.error(err);
	}
});

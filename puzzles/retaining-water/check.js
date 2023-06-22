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

	try {
		const tests = JSON.parse(data)["tests"];

		// the input of the target case
		if (!tests) {
			throw "Tests json is Empty";
		}
		const indexes = [0, 1, 2, 3, 4, 5];

		for (let i of indexes) {
			const test = tests[i];
			output = [];
			// for (let test of tests[0]) {
			console.log("\t".repeat(2), "\x1b[1;30;41m\t" + test.name + "\t\n");

			// get the input as table
			const input = test.input.join("\n");
			const answer = test.output.join("\n");

			console.log = mock;
			solve(() => readline(test.input));
			console.log = backup;

			// the input
			console.log("\n\t\x1b[1;30;46m  Inputs:  \x1b[0m\n");
			console.log(input);
			// the correct answer
			console.log("\n\t\x1b[1;30;42m  Correct answer:  \x1b[0m\n");
			console.log(answer);

			//my answer
			console.log("\n\t\x1b[1;30;45m  My answer:  \x1b[0m\n");
			console.log(output.join("\n"));
		}
	} catch (err) {
		console.error(err);
	}
});

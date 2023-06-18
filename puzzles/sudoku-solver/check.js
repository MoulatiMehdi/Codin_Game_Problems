/** @format */

const fs = require("fs");
const solve = require("./main");
const print = require("./print");

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

	try {
		const tests = JSON.parse(data)["tests"];

		// the input of the target case
		if (!tests) {
			throw "Tests json is Empty";
		}
		const indexes = [3];

		for (let i of indexes) {
			const test = tests[i];
			// for (let test of tests[0]) {
			console.log("\t".repeat(5), "\033[1;30;41m\t" + test.name + "\t\n");

			// get the input as table
			const origin = test.input.map((c) => c.split(""));

			console.log = mock;
			solve(() => readline(test.input));
			console.log = backup;

			const answer = test.output.map((c) => c.split(""));
			const myAnswer = output.split("\n").map((c) => c.split(""));

			// the input
			console.log("\n\t\033[1;30;46m  Inputs:  \033[0m\n");
			print(origin, origin);

			// the correct answer
			console.log("\n\t\033[1;30;42m  Correct answer:  \033[0m\n");
			print(answer, origin);

			//my answer
			console.log("\n\t\033[1;30;46m  My answer:  \033[0m\n");
			print(myAnswer, origin);
		}
	} catch (err) {
		console.error(err);
	}
});

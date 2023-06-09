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
			// const test = tests[0];
			// console.log("Title          :", test.name);
			// console.log("Inputs         : ", test.input);
			// console.log(
			// 	"Your answer    : ",
			// 	solve(() => readline(test.input))
			// );
			// console.log("Correct answer : ", test.output.join(" "));
			for (let test of tests) {
				console.log(
					"\t".repeat(5),
					"\033[1;30;41m",
					"\t" + test.name + "\t"
				);
				console.log("\n");
				console.log(
					"\033[1;30;46mInputs         : \033[0m",
					"\033[1;37m",
					test.input
				);

				console.log = mock;
				solve(() => readline(test.input));
				console.log = backup;

				console.log(
					"\033[1;30;47mYour answer    : \033[0m",
					"\033[1;37m" + output
				);
				console.log(
					"\033[1;30;42mCorrect answer : \033[0m",
					"\033[1;37m" + test.output.join(" ")
				);
				console.log("\033[1;35m*".repeat(120));
			}
		} else {
			console.warn("tests variable is empty");
		}
	} catch (err) {
		console.error(err);
	}
});

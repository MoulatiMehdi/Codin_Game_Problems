/** @format */

const solve = require("./main");

const fs = require("fs");

fs.readFile("./test.json", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
	}
	const file = JSON.parse(data);

	input = file["tests"][3].input;
	console.log(input);

	solve(input);
});

/** @format */

const fs = require("fs");
const sortObject = require("./modules/sortObject.js");
const path = ".\\puzzles\\sudoku-solver\\lines.json";

console.log("Loading the json File...");

// read settings.json file
fs.readFile(path, "utf8", (err, data) => {
	// ! if error
	if (err) {
		console.error(err);
		return;
	}

	//  msg
	console.log("File has Been Loaded.");
	console.log("Parsing the string to a JSON object ...");

	// convert the string object to json object and sort it
	const object = sortObject(JSON.parse(data));
	console.log("Converting object to Text...");

	// convert it to text
	const text = JSON.stringify(object, {}, 4);

	// write it inside the setting file
	fs.writeFile(path, text, (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("File has been saved in the json file");
	});
});

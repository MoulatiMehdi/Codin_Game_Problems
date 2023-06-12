/** @format */

const puppeteer = require("puppeteer");
const puzzle = require("./modules/puzzle.js");
const msg = require("./modules/message.js");
const fs = require("fs");

const url = "https://www.codingame.com/ide/puzzle/" + process.argv[2];

const browserOptions = {
	headless: false,
	executablePath:
		"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
};
const pageOptions = {
	waitUntil: "networkidle0",
};

async function createCases(page) {
	console.log("Loading test cases ...");
	const object = await puzzle.loadCases(page);

	console.log("Creating test.json File in ", __dirname, " Folder ...");
	fs.writeFile("test.json", object, {}, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}
		msg.success("File 'test.json' has been created with success");
	});
}

async function createDescription(page) {
	console.log("Loading the puzzle's question ...");
	const text = await puzzle.loadQuestion(page);

	console.log("Creating the problem.md file In ", __dirname, " Folder...");
	fs.writeFile("README.md", text, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}

		msg.success("File 'problem.md' has been created with success");
	});
}
async function createAll(page) {
	getCases(page);
	getDescription(page);
}

async function main(func) {
	const browser = await puppeteer.launch(browserOptions);
	const page = await browser.newPage();

	console.log("\033[1;37mLoading the page ...");
	await page.goto(url, pageOptions);

	const test = await page.$(".wilson_wrapper");

	if (!test) {
		await func(page).catch((err) => {
			msg.fail(err);
			return;
		});
	} else {
		msg.fail("Puzzle Not found.");
	}

	await browser.close();
}

function getDescription() {
	main(createDescription);
}
function getCases() {
	main(createCases);
}

function getAll() {
	main(createAll);
}
module.exports = { getAll, getDescription, getCases };

/** @format */

const puppeteer = require("puppeteer");
const loadCases = require("./loadCases.js");
const loadQuestion = require("./loadQuestion.js");
const msg = require("./message.js");
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

async function getPuzzle(page) {
	console.log("Loading test cases ...");
	const object = await loadCases(page);
	msg.success("Cases has been loaded with success.");

	console.log("Loading the puzzle's question ...");
	const text = await loadQuestion(page);
	msg.success("puzzle's question has been loaded with success.");

	console.log("Creating test.json File ...");
	fs.writeFile("test.json", object, {}, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}
		msg.success("File 'test.json' has been created with success");
	});

	console.log("Creating the problem.md file ...");
	fs.writeFile("README.md", text, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}

		msg.success("File 'problem.md' has been created with success");
	});
}

async function main() {
	const browser = await puppeteer.launch(browserOptions);
	const page = await browser.newPage();

	console.log("\033[1;37mLoading the page ...");
	await page.goto(url, pageOptions);
	msg.success("Page has been loaded  with success");

	const test = await page.$(".wilson_wrapper");

	if (!test) {
		await getPuzzle(page).catch((err) => {
			msg.fail(err);
			return;
		});
	} else {
		msg.fail("Puzzle Not found.");
	}

	await browser.close();
}

main();

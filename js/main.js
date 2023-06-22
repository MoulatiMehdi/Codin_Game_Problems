/** @format */

const fs = require("fs");
const puppeteer = require("puppeteer-core");
const puzzle = require("./modules/puzzle.js");
const msg = require("./modules/message.js");

const mdFile = "readme.md";
const jsonFile = "test.json";
const mainJs = "main.js";
const puzzleName = process.argv[2].replace(" ", "-").toLowerCase();

const url = "https://www.codingame.com/ide/puzzle/" + puzzleName;

const browserOptions = {
	headless: true,
	executablePath:
		"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
};
const pageOptions = {
	waitUntil: "networkidle0",
	timeout: 100000,
};
/**
 *
 * @param {puppeteer.Page} page
 */
async function createCases(page) {
	console.log("Loading test cases ...");
	const object = await puzzle.loadCases(page);

	console.log("Creating '" + jsonFile + "' File ...");
	fs.writeFile(jsonFile, object, {}, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}
		msg.success("File '" + jsonFile + "' has been created with success");
	});
}

async function createDescription(page) {
	console.log("Loading the puzzle's question ...");
	const text = await puzzle.loadQuestion(page);

	console.log("Creating the '" + mdFile + "' file ...");
	fs.writeFile(mdFile, text, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}

		msg.success("File '" + mdFile + "' has been created with success");
	});
}
async function createAll(page) {
	await createDescription(page);
	await createCases(page);
}

async function createCode(page) {
	console.log("Loading the puzzle's code ...");

	let text = "function solve(readline){\n";
	text += await puzzle.loadCode(page);
	text += "\n}\n\nmodule.exports = solve";

	console.log("Creating '" + mainJs + "' file ...");

	fs.writeFile(mainJs, text, (err) => {
		if (err) {
			msg.fail(err);
			return;
		}
		msg.success("File '" + mainJs + "' has been created with success");
	});
}

async function main(func) {
	let totalDataSize = 0;
	const browser = await puppeteer.launch(browserOptions);
	const page = await browser.newPage();

	// Enable caching
	await page.setCacheEnabled(true);
	await page.setRequestInterception(true);

	page.on("request", (request) => {
		request.url();
		if (/(image)|(binary)/.test(request.resourceType())) {
			request.abort();
		} else {
			request.continue();
		}
	});

	page.on("response", (response) => {
		const contentLength = response.headers()["content-length"];
		if (contentLength) {
			totalDataSize += parseInt(contentLength);
		}
	});

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

	const connectionUsage = totalDataSize / (1024 * 1024);
	console.log("Connection Usage: \t", connectionUsage.toFixed(2), "MB");

	await browser.close();
}

async function getDescription() {
	await main(createDescription);
}
async function getCases() {
	await main(createCases);
}

async function getCode() {
	await main(createCode);
}
async function getAll() {
	await main(createAll);
}
module.exports = { getAll, getDescription, getCases, getCode };

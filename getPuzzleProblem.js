/** @format */

const puppeteer = require("puppeteer");
const fs = require("fs");
const url = "https://www.codingame.com/ide/puzzle/simple-load-balancing";

const browserOptions = {
	headless: "new",
	executablePath:
		"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
};
const pageOptions = {
	waitUntil: "networkidle0",
};

function format() {}

async function getProblem() {
	const browser = await puppeteer.launch(browserOptions);
	const page = await browser.newPage();
	/**
	 *
	 * @param {puppeteer.ElementHandle} elem
	 * @param {string} selector
	 */
	async function getElementText(elem, selector) {
		await page.waitForSelector(selector);
		return await page.evaluate(
			(ele) => ele.outerHTML,
			await elem.$(selector)
		);
	}

	console.log("Loading the page ...");
	await page.goto(url, pageOptions);
	console.log("The page has been loaded .");

	await page.waitForSelector(".statement-body");

	// body children
	// const protocol = await page.$(".statement-protocol");
	// const goal = await body.$(".goal-statement");

	// goal children
	// const question = await goal.$(".question-statement");
	// const title = await goal.$("h2");

	const text = await getElementText(page, ".statement-body");

	fs.writeFile("problem.md", text, (err) => {
		if (err) console.error(err);
		console.log("File has been created");
	});
	browser.close();
}

getProblem().catch((e) => {
	console.error(e);
});

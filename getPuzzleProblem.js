/** @format */

const puppeteer = require("puppeteer");
const fs = require("fs");
const url = "https://www.codingame.com/ide/puzzle/simple-load-balancing";

const browserOptions = {
	headless: false,
	executablePath:
		"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
};
const pageOptions = {
	waitUntil: "networkidle0",
};
const keys = {
	question: { selector: ".question-statement", title: "# Goal" },
	input: { selector: ".question-statement-input", title: "## Input" },
	output: { selector: ".question-statement-output", title: "## Output" },
	constraint: {
		selector: ".question-statement-constraints",
		title: "## Constraints",
	},
	exampleIn: {
		selector: ".question-statement-example-in",
		title: "### Inputs",
	},
	exampleOut: {
		selector: ".question-statement-example-out",
		title: "### Outputs",
	},
};
/**
 *
 * @param {string} text
 */
async function format(text) {
	text = text.trim();
	text = text.replace(/\<(\/)?var\>/g, "`");
	text = text.replace(/\<(\/)?const\>/g, "**");
	text = text.replace(/<(\/)?br\>/g, "\n");
	text = text.replace(/\<(\/)?pre([^>]+)?\>/g, "\n```\n");
	text = text.replace(/\<[^>]+\>/g, "");
	text = text.replaceAll("&lt;=", " &le; ");
	text = text.replaceAll("&gt;=", " &ge; ");

	return text;
}
/**
 *
 * @param {puppeteer.ElementHandle} elem
 * @param {string} selector
 */

async function getElementText(elem, selector) {
	await elem.waitForSelector(selector);

	let text = await elem.evaluate(
		(ele, keys) => {
			const array = [];
			for (let key in keys) {
				const { selector, title } = keys[key];

				console.log(ele.querySelector(selector));
				const text = ele.querySelector(selector).outerHTML.trim();

				console.log(text);
				array.push(title);
				array.push(text);
			}
			return array.join("\n\n");
		},
		await elem.$(selector),
		keys
	);
	text = await format(text);
	return text;
}
async function getProblem() {
	const browser = await puppeteer.launch(browserOptions);
	const page = await browser.newPage();

	console.log("Loading the page ...");
	await page.goto(url, pageOptions);
	console.log("The page has been loaded .");

	await page.waitForSelector(".statement-body");

	console.log("Loading the Puzzle Statement ...");
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

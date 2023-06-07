/** @format */

const puppeteer = require("puppeteer");
const fs = require("fs");
/**
 *
 * @param {HTMLElement} elem
 * @returns {string}
 */
function getText(elem) {
	console.log(elem);
	return elem.textContent.trim().split("\n");
}

async function laodTests() {
	const tests = [];
	const selectors = {
		input: "pre.testcase-text.testcase-in",
		output: "pre.testcase-text.testcase-out",
		name: ".testcase-name",
		number: ".testcase-number",
		button: ".testcase-header div.open-button",
		showTests: "button.showtestcases-button",
		textcontainer: ".testcases-details-container .testcase",
	};

	const browser = await puppeteer.launch({
		headless: "new",
		executablePath:
			"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
	});
	const page = await browser.newPage();

	async function clickButton(str) {
		await page.evaluate((str) => {
			const button = document.querySelector(str);
			button.click();
		}, str);

		console.log(str + " button is clicked");
	}
	/**
	 *
	 * @param {puppeteer.ElementHandle} elem
	 * @param {string} selector
	 */
	async function getTextContent(elem, selector) {
		await page.waitForFunction(
			(ele, str) => {
				const div = ele.querySelector(str);
				console.log(div.textContent);
				return div && div.textContent !== "";
			},
			{},
			elem,
			selector
		);

		return page.evaluate(getText, await elem.$(selector));
	}

	await page.goto(
		"https://www.codingame.com/ide/puzzle/simple-load-balancing",
		{ waitUntil: "networkidle0", timeout: 100000 }
	);

	console.log("the page has been loaded");

	clickButton(selectors.showTests);

	page.waitForSelector(selectors.textcontainer);
	const elems = await page.$$(selectors.textcontainer);

	for (let elem of elems) {
		const name = await page.evaluate(
			(name, num) =>
				num.textContent.trim() + "-" + name.textContent.trim(),
			await elem.$(selectors.name),
			await elem.$(selectors.number)
		);

		const open = await elem.$(selectors.button);
		await open.click();

		const input = await getTextContent(elem, selectors.input);
		const output = await getTextContent(elem, selectors.output);

		tests.push({ name, input, output });
	}
	// Print the validation cases
	console.log(tests);
	browser.close();

	fs.writeFile("test.json", JSON.stringify({ tests }), (err) => {
		if (err) throw err;
		console.info('The "data to append" was appended to file!');
	});
}

laodTests().catch((e) => {
	console.error(e);
});

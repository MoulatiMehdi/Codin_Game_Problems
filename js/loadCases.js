/** @format */

/**
 * returns the text content of an element
 * @param {puppeteer.Page} page the page when the elem exist
 * @param {puppeteer.ElementHandle} elem the parent of the target element
 * @param {string} selector the selector of the target element
 *
 * @returns {string}
 */
async function getTextContent(page, elem, selector) {
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

	return page.evaluate(
		(ele) => ele.textContent.trim(),
		await elem.$(selector)
	);
}

/**
 * Click a button programatically
 * @param {puppeteer.Page|puppeteer.ElementHandle} elem the Parent element of the button
 * @param {string} str the selector of the button
 */
async function clickButton(elem, str) {
	await elem.evaluate((str) => {
		const button = document.querySelector(str);
		button.click();
	}, str);

	console.log(str + " button is clicked");
}

/**
 * returns all the cases of a puzzle as JSON String
 * @param {puppeteer.Page} page the page where
 * @returns {Promise<string>}
 */
async function loadCases(page) {
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

	// click the button that will show the test cases
	clickButton(page, selectors.showTests);

	// wait until the element showed up (max 30 second)
	page.waitForSelector(selectors.textcontainer);

	// get the container of the cases
	const elems = await page.$$(selectors.textcontainer);

	for (let elem of elems) {
		// get the name of the case
		const name = await page.evaluate(
			(name, num) =>
				[num, name].map((c) => c.textContent.trim()).join("-"),
			await elem.$(selectors.name),
			await elem.$(selectors.number)
		);

		// click the button that shows the case
		const open = await elem.$(selectors.button);
		await open.click();

		// get the input and the output of the case
		const input = await getTextContent(page, elem, selectors.input);
		const output = await getTextContent(page, elem, selectors.output);

		tests.push({
			name,
			input: input.split("\n"),
			output: output.split("\n"),
		});
	}

	// return the cases as a string JSON object
	return JSON.stringify({ tests });
}

module.exports = loadCases;

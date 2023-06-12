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
		(ele) => ele.textContent,
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
	await clickButton(page, selectors.showTests);

	// wait until the element showed up (max 30 second)
	await page.waitForSelector(selectors.textcontainer);

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
	return JSON.stringify({ tests },{},4);
}

const keys = {
	question: { selector: ".question-statement", title: "# Goal 🎯 :" },
	input: { selector: ".question-statement-input", title: "## Input 📥 :" },
	output: {
		selector: ".question-statement-output",
		title: "## Output 📤 :",
	},
	constraint: {
		selector: ".question-statement-constraints",
		title: "##  Constraints 📏 :",
	},
	exampleIn: {
		selector: ".question-statement-example-in",
		title: "### Inputs 📥 :",
	},
	exampleOut: {
		selector: ".question-statement-example-out",
		title: "### Outputs 📤 :",
	},
};

/**
 * convert the html elements to markdown syntax
 * @param {string} text
 * @returns {Promise<string>}
 */
async function format(text) {
	text = text.replace(/\<(\/)?var\>/g, "`");
	text = text.replace(/\<(\/)?const\>/g, "**");
	text = text.replace(/<(\/)?br\>/g, "\n\n");
	text = text.replace(/\<(\/)?pre([^>]+)?\>/g, "\n```\n");
	text = text.replace(/\<[^>]+\>/g, "");
	text = text.replaceAll("&lt;=", " &le; ");
	text = text.replaceAll("&gt;=", " &ge; ");

	return text;
}

/**
 * returns a string of the puzzle's statement in markdown syntax
 * @param {puppeteer.Page} page the target page
 * @returns {Promise<string>}
 */
async function loadQuestion(page) {
	const body = ".statement-body";
	await page.waitForSelector(body);
	let text = await page.evaluate(
		(ele, keys) => {
			const array = [];
			for (let key in keys) {
				const { selector, title } = keys[key];

				console.log(ele.querySelector(selector));
				const text = ele.querySelector(selector).outerHTML;

				console.log(text);
				array.push(title);
				array.push(text);
			}
			return array.join("\n\n");
		},
		await page.$(body),
		keys
	);
	text = await format(text);
	return text;
}
/**
 *
 * @param {Page} page
 */
async function loadCode(page) {
	const selectItem = ".code-management .selected-items";
	const lineSelector = ".view-lines";

	await page.waitForSelector(selectItem);
	await clickButton(page, selectItem);
	await page.waitForSelector(".language-menu");
	await page.evaluate((list) => {
		list.querySelectorAll("label.menu-item").forEach((div) => {
			console.log(div.textContent.toLowerCase());
			if (div.textContent.toLowerCase() === "javascript") {
				console.log(div.innerText);
				div.click();
				return;
			}
		});
	}, await page.$(".language-menu"));

	await page.waitForFunction(() => {
		const elem = document.querySelector(
			".cg-ide-language-selector span.selected-item"
		);
		return elem && elem.textContent.toLowerCase() === "javascript";
	});

	let lines = await page.evaluate((childs) => {
		const array = [];
		for (let child of childs.children) {
			const index = child.offsetTop / 16;
			let line = "";

			for (let span of child.querySelector("span").children) {
				const classes = span.classList;
				if (classes.contains("mtkw")) {
					var len = span.textContent.length / 2;
					line += " ".repeat(len);
				} else {
					line += span.textContent.replace(/\u00A0/g, " ");
				}
			}
			array[index] = line;
		}
		return array;
	}, await page.$(lineSelector));

	console.log(lines.join("\n"));
	return lines.join("\n");
}
module.exports = { loadCases, loadQuestion, loadCode };

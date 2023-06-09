/** @format */

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
	text = text.trim();
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
				const text = ele.querySelector(selector).outerHTML.trim();

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

module.exports = loadQuestion;

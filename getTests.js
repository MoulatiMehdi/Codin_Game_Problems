/** @format */

const getTest = async (test) => {
	try {
		const header = await test.querySelector(".testcase-header");
		const inDiv = await test.querySelector(".testcase-text.testcase-in");
		const outDiv = await test.querySelector(".testcase-text.testcase-out");

		// click the header to show the tests
		await header.click();

		// get the name of the test
		const number = await header.querySelector(".testcase-number").innerText;
		const name =
			number +
			" " +
			(await header.querySelector(".testcase-name").innerText);

		let input = await inDiv.innerText;
		let output = await outDiv.innerText;

		// convert them to an array if necessary
		input.includes("\n") && (input = input.split("\n"));
		output.includes("\n") && (output = output.split("\n"));

		// output them in the console
		object.tests.push({
			name,
			input,
			output,
		});
	} catch (error) {
	}
};
document.querySelector(".header-button.showtestcases-button").click();
const object = {
	tests: [],
};
const tests = await document.querySelectorAll(".testcase");

for (let i = 0; i < tests.length; i++) {
	await getTest(tests[i]);
	await getTest(tests[i]);
}

console.log(object);

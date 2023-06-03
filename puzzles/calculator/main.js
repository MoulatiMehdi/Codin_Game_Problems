/** @format */

const isOperator = (key) => /^[+-/x]+$/g.test(key);
const isDigit = (key) => /^\d+$/g.test(key);
const parse = (a, b, operator) => {
	operator == "x" && (operator = "*");
	return eval(a + operator + b).toFixed(3) / 1 + "";
};

let screen = "0";
let operator = "+";
let prevKey = "+";
let prevNum = "0";

function reset() {
	screen = "0";
	operator = "+";
	prevKey = "+";
	prevNum = "0";
}

function solve(keys) {
	reset();
	while (keys.length > 0) {
		const key = keys.shift();

		if (key == "AC") {
			reset();
		} else if (prevKey == "AC" && isDigit(key)) {
			screen = key;
		} else if (key == "=" && prevKey == "=") {
			screen = parse(screen, prevNum, operator);
		} else if (key == "=") {
			var a = screen;
			screen = parse(prevNum, screen, operator);
			prevNum = a;
		} else if (prevKey == "=" && isDigit(key)) {
			reset();
			screen = key;
		} else if (prevKey == "=" && isOperator(key)) {
			operator = key;
		} else if (isDigit(prevKey + key)) {
			// DONE
			screen += key;
		} else if (isOperator(key + prevKey)) {
			//replace the key
			operator = key;
		} else if (isOperator(prevKey) && isDigit(key)) {
			prevNum = screen;
			screen = key;
		} else if (isOperator(key) && isDigit(prevKey)) {
			screen = parse(prevNum, screen, operator);
			operator = key;
		}
		console.log(screen/1);
		prevKey = key;
	}
}

module.exports = solve;

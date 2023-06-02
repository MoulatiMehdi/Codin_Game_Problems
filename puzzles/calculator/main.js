/** @format */

function solve(readline) {
	const isOperator = (key) => /^[+-/x]+$/g.test(key);
	const isNum = (key) => /^\d+$/g.test(key);
	const parse = (a, b, oper) =>
		eval(a + (oper == "x" ? "*" : oper) + b).toFixed(3) / 1;

	function reset() {
		screen = prevNum = "0";
		oper = prevKey = "+";
	}

	const n = +readline();
	const keys = Array(n)
		.fill(null)
		.map((c) => readline());

	reset();
	while (keys.length > 0) {
		const key = keys.shift();

		if (key == "AC") {
			reset();
		} else if (prevKey == "AC" && isNum(key)) {
			screen = key;
		} else if (key == "=") {
			if (prevKey == "=") {
				screen = parse(screen, prevNum, oper);
			} else {
				var a = screen;
				screen = parse(prevNum, screen, oper);
				prevNum = a;
			}
		} else if (prevKey == "=" && isNum(key)) {
			reset();
			screen = key;
		} else if (isOperator(key)) {
			if (isNum(prevKey)) {
				screen = parse(prevNum, screen, oper);
			}
			oper = key;
		} else if (isNum(prevKey + key)) {
			screen += key;
		} else if (isNum(key) && isOperator(prevKey)) {
			prevNum = screen;
			screen = key;
		}
		console.log(screen / 1);
		prevKey = key;
	}
}

module.exports = solve;

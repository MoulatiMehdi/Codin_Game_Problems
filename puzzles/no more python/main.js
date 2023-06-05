/** @format */

function solve(readline) {
	const T = "v<>^";
	const snakes = { len: 0, count: 0 };
	const getLine = (s) => readline().split(s);

	const [H, W] = getLine(" ").map((c) => +c);
	const card = Array(H)
		.fill(0)
		.map((c) => getLine(""));

	const get = (i, j) => card[i][j];
	const isEq = (i, j, c = "") =>
		i >= 0 && i < H && j >= 0 && j < W && c.includes(get(i, j));

	function getLen(i, j) {
		let char = get(i, j);
		let prev = "";
		let len = 0;
		function set(i, j) {
			prev =
				char != "*"
					? char
					: prev == "-"
					? "|"
					: prev == "|"
					? "-"
					: prev;
			char = get(i, j);
			card[i][j] = ".";
			len++;
		}
		const move = (a, b, str) =>
			isEq(i - a, j - b, str) ? -1 : isEq(i + a, j + b, str) ? 1 : 0;
		j += move(0, 1, "-");
		i += move(1, 0, "|");

		set(i, j);
		while (!T.includes(char)) {
			if (char === "-") j += move(0, 1, "-*" + T);
			else if (char === "|") i += move(1, 0, "|*" + T);
			else if (char === "*" && prev === "|") j += move(0, 1, "-");
			else if (char === "*" && prev === "-") i += move(1, 0, "|");
			set(i, j);
		}
		set(i, j);

		return len;
	}

	card.forEach((line, i) => {
		line.forEach((cell, j) => {
			if (cell === "o") {
				len = getLen(i, j);
				var max = snakes.len;
				if (len > max) {
					snakes.len = len;
					snakes.count = 1;
				} else if (len == max) {
					snakes.count++;
				}
			}
		});
	});
	console.log(snakes.len);
	console.log(snakes.count);
}

module.exports = solve;

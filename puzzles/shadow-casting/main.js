/** @format */

function solve(readline) {
	const [D, L, S] = ["-", "`", " "];
	const hasShadow = (char) => !(D + L + S).includes(char);
	const isValid = (char) => char == L || char == S;
	const N = +readline();
	let lines = Array(N).fill(null).map(readline);

	const max = Math.max(...lines.map((c) => c.length));
	lines = lines.map((c) => c.padEnd(max + 2, S).split(""));

	function draw(arr = [[]], c, s) {
		arr.forEach((line, i) => {
			line.forEach((cell, j) => {
				if (hasShadow(cell)) {
					if (!arr[i + s])
						arr[i + s] = Array(line.length + s).fill(S);
					if (isValid(arr[i + s][j + s])) arr[i + s][j + s] = c;
				}
			});
		});
	}

	draw(lines, L, 2);
	draw(lines, D, 1);
	console.log(lines.map((c) => c.join("").trimEnd()).join("\n"));
}

module.exports = solve;

/** @format */

function solve(readline) {
	const N = +readline();
	const fixed = new Set();
	const [D, L, S] = ["-", "`", " "];
	let lines = Array(N).fill(null).map(readline);
	const max = Math.max(...lines.map((c) => c.length));
	lines = lines.map((c) => c.padEnd(max + 2, S).split(""));
	lines.map((line, i) =>
		line.map((cell, j) => (cell !== " " ? fixed.add(i + " " + j) : 0))
	);

    function draw(arr = [[]], c, s) {
		arr.forEach((line, i) => {
			line.forEach((cell, j) => {
				if (fixed.has(i + " " + j)) {
					if (!arr[i + s]) {
						arr[i + s] = Array(line.length + s).fill(S);
						arr[i + s][j + s] = c;
					} else if (!fixed.has(i + s + " " + (j + s))) {
						arr[i + s][j + s] = c;
					}
				}
			});
		});
	}

	draw(lines, L, 2);
	draw(lines, D, 1);
	console.log(lines.map((c) => c.join("").trimEnd()).join("\n"));
}

module.exports = solve;

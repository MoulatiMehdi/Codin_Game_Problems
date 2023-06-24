/** @format */

function solve(readline) {
	const N = +readline();
	const grid = [];
	const moves = [
		{ x: 1, y: 0 },
		{ x: -1, y: 0 },
		{ x: 0, y: 1 },
		{ x: 0, y: -1 },
	];

	function isValid(i, j) {
		return i >= 0 && j >= 0 && i < N && j < N;
	}

	function calcWater(i, j) {
		const queue = [{ i, j }];
		const visited = new Set();
		const edit = {};
		const ref = grid[i][j];
		let max = Infinity;

		while (queue.length > 0) {
			const { i, j } = queue.shift();
			const key = i + " " + j;
			if (isValid(i, j) && !visited.has(key)) {
				visited.add(key);
				const val = grid[i][j];
				if (val <= ref) {
					if (i % (N - 1) == 0 || j % (N - 1) == 0) {
						return 0;
					}
					edit[key] = true;
					for (let { x, y } of moves) {
						queue.unshift({ i: x + i, j: y + j });
					}
				} else if (max > val) {
					max = val;
				}
			}
		}
		let count = 0;

		for (let cell in edit) {
			const [x, y] = cell.split(" ");
			if (edit[cell]) {
				count += max - grid[x][y];
				grid[x][y] = max;
			}
		}
		return count;
	}

	for (let i = 0; i < N; i++) {
		const line = readline()
			.split("")
			.map((c) => c.charCodeAt(0) - "A".charCodeAt(0) + 1);
		grid.push(line);
	}
	let count = 0;
	for (let i = 1; i < N - 1; i++) {
		for (let j = 1; j < N - 1; j++) {
			count += calcWater(i, j);
		}
	}
	console.log(count);
}

module.exports = solve;

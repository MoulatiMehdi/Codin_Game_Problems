/** @format */

function solve(readline) {
	const digits = "123456789".split``;

	const x = (i, j) => i - (i % 3) + (j - (j % 3)) / 3;
	const y = (i, j) => 3 * (i % 3) + (j % 3);

	const grid = Array(9)
		.fill(0)
		.map(() => readline().split``);

	const getCol = (i, arr = grid) => arr.map((line) => line[i]);
	const getBox = (i, arr = grid) => arr.map((c, j) => arr[x(i, j)][y(i, j)]);
	const getRow = (i, arr = grid) => arr[i];

	function isGridValid(arr = grid) {
		const check = (func, i) =>
			!func(i, arr).every((c, i, a) => c == 0 || a.indexOf(c) == i);

		for (let i = 0; i < 9; i++) {
			if ([getRow, getBox, getCol].every((func) => check(func, i))) {
				return false;
			}
		}
		return true;
	}

	function solution(i, j) {
		if (!isGridValid()) return;
		if (i > 8) return true;
		if (grid[i][j] == 0) {
			const reserved = [
				getRow(i),
				getCol(j),
				getBox(i - (i % 3) + (j - (j % 3)) / 3),
			].flat();

			const rest = digits.filter((c) => !reserved.includes(c));
			for (let k of rest) {
				grid[i][j] = k;
				if (solution(i + (j + 1 == 9), (j + 1) % 9)) {
					return true;
				}
				grid[i][j] = "0";
			}
		} else {
			return solution(i + (j + 1 == 9), (j + 1) % 9);
		}
	}

	solution(0, 0);
	console.log(grid.map((c) => c.join("")).join("\n"));
}

module.exports = solve;

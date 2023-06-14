/** @format */

function solve(readline) {
	const digits = "123456789".split``;
	const x = (i, j) => i - (i % 3) + (j - (j % 3)) / 3;
	const y = (i, j) => 3 * (i % 3) + (j % 3);

	function print(arr, a, b) {
		console.info("╔═══════╦═══════╦═══════╗");
		for (let i = 0; i < 9; i++) {
			let str = "║\033[1;34m";
			for (let j = 0; j < 9; j++) {
				str += " ";
				if (a == i && b == j) {
					str += "\033[1;30;45m";
				}
				str += arr[i][j];
				str += "\033[0m\033[1;34m";
				if ((j + 1) % 3 == 0) str += "\033[0m ║\033[1;34m";
			}
			console.info(str.trim());
			if ((i + 1) % 3 == 0 && i != 8)
				console.info("╠═══════╬═══════╬═══════╣");
		}
		console.info("╚═══════╩═══════╩═══════╝");
	}
	const grid = Array(9)
		.fill(0)
		.map(() => readline().split``);

	const getCol = (i, arr = grid) => arr.map((line) => line[i]);
	const getBox = (i, arr = grid) => arr.map((c, j) => arr[x(i, j)][y(i, j)]);
	const getRow = (i, arr = grid) => arr[i];

	const isFull = (arr = grid) => arr.every((c) => !c.includes("0"));
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
	let count = 0;
	function solution(i, j) {
		if (i < 9) {
			if (i >= 5 || (j == 5 && j >= 7)) {
				console.info("Stop");
				print(grid, i, j);
			}
			if (grid[i][j] == 0) {
				if (isGridValid()) {
					if (isFull()) {
						throw "Solution Found";
					} else {
						const reserved = [
							getRow(i),
							getCol(j),
							getBox(i - (i % 3) + (j - (j % 3)) / 3),
						].flat();

						const rest = digits.filter(
							(c) => !reserved.includes(c)
						);
						for (let k of rest) {
							grid[i][j] = k;
							solution(i + (j + 1 == 9), (j + 1) % 9);
							grid[i][j] = "0";
						}
					}
				}
			} else {
				solution(i + (j + 1 == 8), (j + 1) % 9);
			}
		} else {
			console.error(++count);
		}
	}
	try {
		solution(0, 0);
	} catch (error) {
		console.info(isFull(grid));
	}
}

module.exports = solve;

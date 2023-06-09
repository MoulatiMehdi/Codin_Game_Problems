/** @format */

/**
 * @param {Function} readline
 */
function solve(readline) {

	function binarySearch(List, sum) {
		let max = List.length - 1;
		let min = 0;
		let med = Math.ceil((max + min) / 2);
		while (min < max) {
			const a = List[med] * (med + 1);
			const b = k + sum[med];
			if (a < b) {
				min = med + 1;
			} else if (a > b) {
				max = med - 1;
			} else {
				return Li.at(-1) - Li[med];
			}
			med = Math.floor((max + min) / 2);
		}
		return Li.at(-1) - Math.floor((k + sum[med]) / (med + 1));
	}
	const N = +readline();
	const k = +readline();
	const Li = readline()
		.split(" ")
		.map((value) => +value)
		.sort((a, b) => a - b);
	const sum = [Li[0]];
	for (let i = 1; i < N; i++) {
		sum[i] = sum[i - 1] + Li[i];
	}

	const missed = Li.at(-1) * N - sum.at(-1);
	let answer = null;

	if (k >= missed) {
		answer = +(k % missed !== 0);
	} else {
		answer = binarySearch(Li, sum);
	}
	console.log(answer);
}

module.exports = solve;

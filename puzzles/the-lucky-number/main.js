/** @format */

function solve(readline) {
	const [L, R] = readline().split(" ").map(Number);
	function isLucky(number) {
		return /6/g.test(number) ^ (/8/g.test(number) == 1);
	}
	function C(n, k) {
		if (k == 0 || k == n) return 1;
		if (k == 1 || k == n - 1) return n;

		return C(n - 1, k) + C(n - 1, k - 1);
	}

	function count(n) {
		let res = 0;
		for (let i = 1; i <= n; i++) {
			res += C(n, i) * 8 ** (n - i);
		}
		return res * 2;
	}

	console.log(count(18));
}

module.exports = solve;

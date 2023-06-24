/** @format */

function solve(readline) {
	const [R, C] = readline()
		.split(" ")
		.map((c) => +c);
	const arr = Array(R)
		.fill(0)
		.map(() => readline().replace(/\s/g, ""));
	const prime = new Set();
	const visited = new Set();
	count(R, C, (i) => arr[i]);
	count(C, R, (i) => arr.map((line) => line[i]).join(""));
	console.log(prime.size);

	function count(A, B, func) {
		for (let i = 0; i < A; i++) {
			const text = func(i);
			for (let j = 1; j <= B; j++) {
				for (let k = 0; k <= B - j; k++) {
					const part = +text.substring(k, k + j);
					if (!visited.has(part) && isPrime(part)) {
						prime.add(part);
						visited.add(part);
					}
				}
			}
		}
	}

	function isPrime(n) {
		let ans = true;
		if (n < 2) ans = false;
		else if (n > 3 && (n % 2 == 0 || n % 3 == 0)) ans = false;
		else {
			let i = 5;
			while (i * i <= n) {
				if (n % i == 0 || n % (i + 2) == 0) {
					ans = false;
					break;
				}
				i += 6;
			}
		}
		return ans;
	}
}

module.exports = solve;

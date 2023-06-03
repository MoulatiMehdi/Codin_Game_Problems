/** @format */


function solve(readline) {

	const getLine = () => readline().split(" ");
	const N = +readline();
	const R = {
		"(": "(",
		"[": "[",
		")": ")",
		"]": "]",
	};

	for (let i = 0; i < N; i++) {
		const [name, ohm] = getLine();
		R[name] = +ohm;
	}
	let text = readline()
		.split(/\s+/g)
		.map((c) => R[c])
		.join(" ");

	while (/[[\]()]/g.test(text)) {
		const arr = new Set(text.match(/\[[^\[\]\(\)]+\]|\([^\[\]\(\)]+\)/g));
		arr.forEach((key) => {
			const queue = key.match(/[\d\.\-\+]+/g);
			let num = /^\(/.test(key)
				? queue.map((c) => parseFloat(c)).reduce((a, b) => a + b)
				: 1 /
				  queue.map((c) => 1 / parseFloat(c)).reduce((a, b) => a + b);
			text = text.replaceAll(key, num);
		});
	}

	console.log(parseFloat(text).toFixed(1));
}

module.exports = solve;

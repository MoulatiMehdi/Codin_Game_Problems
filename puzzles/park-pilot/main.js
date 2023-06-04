/** @format */

function solve(readline) {
	const n = +readline();
	const [FL, FR, BR, BL] = [0, 1, 2, 3];

	const sensor = Array(n)
		.fill(null)
		.map(() => readline().split(""))
		.reduce((a, b) => a.map((v, i) => v + b[i]));
	const len = sensor[BL].indexOf("0") - sensor[FL].indexOf("0") + 1;
	const left = sensor[BL].substring(0, len - 1) + sensor[FL];
	const right = sensor[BR].substring(0, len - 1) + sensor[FR];
	const park = [];

	parse(left, "L");
	parse(right, "R");

	console.log(len);
	park.sort((a, b) => a.idx - b.idx).forEach((c) => {
		console.log(c.idx + c.dir);
	});

	function parse(str, ch) {
		var prev = 0;
		while (true) {
			let idx = str.indexOf("0".repeat(len));
			if (idx == -1) break;

			park.push({ idx: idx + len - 1 + prev, dir: ch });
			prev += +idx + 1;
			str = str.substring(idx + 1);
		}
	}
}

module.exports = solve;

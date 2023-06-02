/** @format */

function solve(readline) {
	const N = +readline();
	let way = ["", "", "", ""];
	let park = [];

	for (let i = 0; i < N; i++)
		readline()
			.split("")
			.map((c, j) => (way[j] += c));

	len = way[3].indexOf("0") - way[0].indexOf("0") + 1;
	len = Math.max(len, way[2].indexOf("0") - way[1].indexOf("0") + 1);

	left = way[3].slice(0, len - 1) + way[0];
	right = way[1].slice(0, len - 1) + way[2];

	sizeL = 0;
	sizeR = 0;

	for (let i in left) {
		if (left[i] == 0) Lsize++;
		else Lsize = 0;

		if (right[i] == 0) Rsize++;
		else Rsize = 0;

		if (Rsize < len && Lsize >= len) park.push(i + "L");
		if (Rsize >= len && Lsize < len) park.push(i - len + 1 + "R");
	}

	park.unshift(len);
	park.forEach((value) => {
		console.log(value);
	});
}

module.exports = solve;

/** @format */

function solve(readline) {
	let str = Array(+readline())
		.fill(0)
		.map(readline)
		.join("\n")
		.replace(/\t/gs, " ".repeat(8));

	const arr = str.split("\n");

	const pattern =
		/create\s*function.*?end;|\b(?!.*create\s*function.*?end;)/gis;
	const funcs = str.match(pattern);

	console.error(funcs);
	const arr1 = str.split("\n");

	max = Math.max(arr.length, arr1.length);

	col = Math.max(...arr.map((c) => c.length));
	for (let i = 0; i < max; i++) {
		console.info(
			"\x1b[1;31m" + arr[i].padEnd(col, " "),
			"\x1b[1;35m-".repeat(20),
			"\x1b[1;32m" + arr1[i] + "\x1b[0m"
		);
	}
	console.info("\n\n");
}

module.exports = solve;

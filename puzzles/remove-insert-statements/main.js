/** @format */

function solve(readline) {
	let str = Array(+readline())
		.fill(0)
		.map(readline)
		.join("\n")
		.replace(/\t/gs, " ".repeat(8));

	const pattern = /(begin.*?end;)|("[^"]*")/gis;

	const funcs = str.match(pattern) || [];
	console.info(funcs);

	str = str.replaceAll(pattern, "<body>");
	console.error(str);
	str = str.replace(/(?<!--)insert\s.*?;\n?/gis, "");

	for (let func of funcs) {
		str = str.replace("<body>", func);
	}

	console.log(str.trim());
}

module.exports = solve;

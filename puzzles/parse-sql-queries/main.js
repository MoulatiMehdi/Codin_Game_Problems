/** @format */

function solve(readline) {
	const query = readline().match(
		/SELECT (.*) FROM \w+(?: WHERE (\w+) = (\w+))?(?: ORDER BY (\w*) (ASC|DESC))?/
	);
	const rows = parseInt(readline());
	const headers = readline().split(" ");
	const columns =
		query[1] == "*" ? headers : query[1].split(",").map((c) => c.trim());
	const orderBy = (a, b) =>
		isNaN(a) ? a.localeCompare(b) : +a > +b ? 1 : +a < +b ? -1 : 0;

	var data = [...Array(rows).keys()].map((i) =>
		readline()
			.trim()
			.split(" ")
			.reduce((row, val, idx) => {
				row[headers[idx]] = val;
				return row;
			}, {})
	);
	data = query[2] ? data.filter((row) => row[query[2]] == query[3]) : data;
	data = query[4]
		? data.sort((a, b) => orderBy(a[query[4]], b[query[4]]))
		: data;
	data = query[5] === "DESC" ? data.reverse() : data;

	console.log(columns.join(" "));
	data.forEach((row) => console.log(columns.map((c) => row[c]).join(" ")));
}

module.exports = solve;

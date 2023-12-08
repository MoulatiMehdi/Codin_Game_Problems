/** @format */

function solve(readline) {
	// Define functions
	const ABS = Math.abs;
	const dist = (x, y) => x ** 2 + y ** 2;
	const inSquare = (x, y) => (Math.max(ABS(x), ABS(y)) * 2 <= SIZE ? 5 : 0);
	const inCircle = (x, y) => (dist(x, y) <= SIZE ** 2 / 4 ? 10 : 0);
	const inDiamond = (x, y) =>
		dist(x, y) <=
		(SIZE /
			Math.sin(
				Math.PI / 4 + Math.atan(x == 0 ? Infinity : ABS(y / x))
			)) **
			2 /
			8
			? 15
			: 0;
	const score = (x, y) => inDiamond(x, y) || inCircle(x, y) || inSquare(x, y);
	const getArr = (func, size = +readline()) => Array(size).fill(0).map(func);

	// Get inputs
	const SIZE = +readline();
	const NAMES = getArr(readline);
	const ROUNDS = getArr(() => readline().split(" "));
	const SCORES = getArr((c, i) => [NAMES[i], 0], NAMES.length);

	// Solve
	ROUNDS.forEach((round) => {
		const [NAME, X, Y] = round;
		SCORES[NAMES.indexOf(NAME)][1] += score(+X, +Y);
	});
	SCORES.sort((a, b) => b[1] - a[1]).forEach((round) => {
		console.log(round.join(" "));
	});
}

module.exports = solve;

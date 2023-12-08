/** @format */

function solve(readline) {
	const [P, S, R] = ["Paper", "Scissors", "Rock"];
	const lose = { [P]: S, [S]: R, [R]: P };
	const moves = Array(+readline()).fill(0).map(readline);
	const n = moves.length;

	function count(i) {
		const myMove = lose[moves[i]];
		const loseMove = lose[myMove];
		const res = [0, 0];
		for (let j = 0; j < n && loseMove != oppMove; j++) {
			var oppMove = moves[(j + i) % n];
			switch (oppMove) {
				case   myMove: res[1]++; break; // draw
				case loseMove: res[0]--; break; // lose
				default      : res[0]++; // win
			}
		}
		return res[0] * n + res[1];
	}
	let max = -Infinity,name,index;
    
	for (let i in moves) {
		const res = count(+i);
		if (res > max) {
			max = res;
			name = lose[moves[i]];
			index = i;
		}
	}
	console.log(name + "\n" + index);
}

module.exports = solve;

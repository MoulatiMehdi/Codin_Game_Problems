/** @format */

function DFS(x, y, pos, depth = 0) {
	if (y >= H || y < 0 || x < 0 || x >= W || map[y][x] == 0) {
		return false;
	}
	printMap(map, x, y);
	const currKey = map[y][x]; // key type 0-13
	// found an Exit
	if (y == H - 1 && x == EXIT) {
		return true;
	}
	// invalid index

	// is cell is unrotated -> go to the next cell directly
	if (+currKey < 0) {
		// find the next cell for the current position
		const d = nextCell(-currKey, pos);
		dx = +x + d.x;
		dy = +y + d.y;
		console.error(dx, dy);
		nextPos = rev[d.nextDir];
		console.error(
			"Fixed",
			`(${x},${y}) = ${map[y][x]} => (${dx},${dy}) = ${map[dy][dx]}`
		);

		return DFS(dx, dy, nextPos, depth + 1);
	} else {
		const type = TYPES[currKey]; // object
		// is the wall hited
		let count = 0;
		do {
			const d = nextCell(map[y][x], pos);
			console.error(map[y][x], pos);
			if (d) {
				dx = +x + d.x;
				dy = +y + d.y;
				nextPos = rev[d.nextDir];
				count++;
				console.error(
					`(${x},${y}) = ${map[y][x]} => (${dx},${dy}) = ${map[dy][dx]}`
				);

				if (depth == 0) {
					return;
				}
				if (DFS(dx, dy, nextPos, depth + 1) != false) {
					console.error("Path found");
					return [dx, dy, count > 2 ? R : L];
				}
			}
			map[y][x] = ROTATE[map[y][x]][L] + "";
		} while (map[y][x] != currKey);
	}

	return false;
}

function nextCell(key, dir) {
	type = TYPES[key + ""];
	if (type && key != 0) {
		nextDir = type[dir];
		if (nextDir) {
			y = nextDir == D ? 1 : nextDir == U ? -1 : 0;
			x = nextDir == R ? 1 : nextDir == L ? -1 : 0;
			return { x, y, nextDir };
		}
	}
	return null;
}

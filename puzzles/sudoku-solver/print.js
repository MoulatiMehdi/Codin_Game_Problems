/** @format */

/**
 * returns a line
 * @param {0|1|2|3} down
 * @param {0|1|2|3} up
 * @param {0|1|2|3} right
 * @param {0|1|2|3} left
 * @returns {string}
 */
function str(down, up, right, left) {
	const lines = {
		"0011": "─",
		"0033": "━",

		"1100": "│",
		"3300": "┃",

		"1010": "┌",
		"1030": "┍",
		"3010": "┎",
		"3030": "┏",

		"1001": "┐",
		"1003": "┑",
		"3001": "┒",
		"3003": "┓",

		"0110": "└",
		"0130": "┕",
		"0310": "┖",
		"0330": "┗",

		"0101": "┘",
		"0103": "┙",
		"0301": "┚",
		"0303": "┛",

		"1110": "├",
		"1130": "┝",
		"1310": "┞",
		"3110": "┟",
		"3310": "┠",
		"1330": "┡",
		"3130": "┢",
		"3330": "┣",

		"1101": "┤",
		"1103": "┥",
		"1301": "┦",
		"3101": "┧",
		"3301": "┨",
		"1303": "┩",
		"3103": "┪",
		"3303": "┫",

		"1011": "┬",
		"1013": "┭",
		"1031": "┮",
		"1033": "┯",
		"3011": "┰",
		"3013": "┱",
		"3031": "┲",
		"3033": "┳",

		"0111": "┴",
		"0113": "┵",
		"0131": "┶",
		"0133": "┷",
		"0311": "┸",
		"0313": "┹",
		"0331": "┺",
		"0333": "┻",

		"1111": "┼",
		"1113": "┽",
		"1131": "┾",
		"1133": "┿",
		"1311": "╀",
		"3111": "╁",
		"3311": "╂",
		"1313": "╃",
		"1331": "╄",
		"3113": "╅",
		"3131": "╆",
		"1333": "╇",
		"3133": "╈",
		"3313": "╉",
		"3331": "╊",
		"3333": "╋",

		"0022": "═",
		"2200": "║",

		"1020": "╒",
		"2010": "╓",
		"2020": "╔",

		"1002": "╕",
		"2001": "╖",
		"2002": "╗",

		"0120": "╘",
		"0210": "╙",
		"0220": "╚",

		"0102": "╛",
		"0201": "╜",
		"0202": "╝",

		"1120": "╞",
		"2210": "╟",
		"2220": "╠",

		"1102": "╡",
		"2201": "╢",
		"2202": "╣",

		"1022": "╤",
		"2011": "╥",
		"2022": "╦",

		"0122": "╧",
		"0211": "╨",
		"0222": "╩",

		"1122": "╪",
		"2211": "╫",
		"2222": "╬",

		"0010": "╶",
		"0030": "╺",

		"0001": "╴",
		"0003": "╸",

		"0100": "╵",
		"0300": "╹",

		"3000": "╻",
		"1000": "╷",

		"0031": "╼",
		"0013": "╾",

		"1300": "╿",
		"3100": "╽",
	};

	const index = "" + down + up + right + left;
	return lines[index];
}

/**
 * returns a line of the sudoku box
 * @param {string} start the start of the line
 * @param {string} line  the horizontal line
 * @param {string} sSep  the secondary seprator
 * @param {string} bSep  the main seperator
 * @param {string} end 	 the end of the line
 * @param {number} space number of space between the character
 * @returns {string}
 *
 *
 */

function boxLine(start, line, sSep, bSep, end, space = 0) {
	const box = Array(3)
		.fill(0)
		.map((_) =>
			Array(3)
				.fill(line.repeat(2 * space + 1))
				.join(sSep)
		);

	return start + box.join(bSep) + end;
}

function startLine(st, nd, sp) {
	const dashes = [
		[st, 0, st, 0],
		[0, 0, st, st],
		[nd, 0, st, st],
		[st, 0, st, st],
		[st, 0, 0, st],
	];
	return boxLine(...getLines(dashes), sp);
}

function endLine(st, nd, sp) {
	const dashes = [
		[0, st, st, 0],
		[0, 0, st, st],
		[0, nd, st, st],
		[0, st, st, st],
		[0, st, 0, st],
	];
	return boxLine(...getLines(dashes), sp);
}
/**
 * draw the line between boxes
 * @param {number} st
 * @param {number} nd
 * @param {number} sp
 * @returns
 */
function seperatorLine(st, nd, sp) {
	const dashes = [
		[st, st, st, 0],
		[0, 0, st, st],
		[nd, nd, st, st],
		[st, st, st, st],
		[st, st, 0, st],
	];

	return boxLine(...getLines(dashes), sp);
}

/**
 * draw the line between contents
 * @param {number} st type of the main line
 * @param {num} nd  type of the secondary ine
 * @param {num} sp number of space
 * @returns
 */
function secondarySeperatorLine(st, nd, sp) {
	const dashes = [
		[st, st, nd, 0],
		[0, 0, nd, nd],
		[nd, nd, nd, nd],
		[st, st, nd, nd],
		[st, st, 0, nd],
	];

	return boxLine(...getLines(dashes), sp);
}

/**
 *
 * @param {Array} arr
 * @param {number} st
 * @param {number} nd
 * @param {number} sp
 * @returns {string}
 */
function contentLine(arr, st, nd, sp) {
	const space = " ".repeat(sp);

	let line = str(st, st, 0, 0);

	for (let i = 0; i < arr.length; i++) {
		line += space + arr[i] + space;
		line +=
			i != 8 && (i + 1) % 3 == 0
				? str(st, st, 0, 0)
				: i != 8
				? str(nd, nd, 0, 0)
				: "";
	}

	line += str(st, st, 0, 0);
	return line;
}

/**
 * convert number to lines string
 * @param {number[]} arrays
 * @returns {string[]}
 */
function getLines(arrays) {
	return arrays.map((array) => str(...array));
}

/**
 * draw the sudoku grid in the console
 * @param {string[][]} grid  your answer grid
 * @param {string[][]} origin the origin sudoku
 * @param {number[]} options  option for types of lines
 */

function drawGrid(grid, origin = grid, options = [3, 1, 1]) {
	const fix = "\033[1;30;47m";
	const reset = "\033[0m";

	const newGrid = addColor(grid, origin);
	const output = [startLine(...options)];

	for (let i = 0; i < 9; i++) {
		output.push(contentLine(newGrid[i], ...options));
		if (i != 8) {
			var string = "";
			if ((i + 1) % 3 == 0) {
				string = seperatorLine(...options);
			} else {
				string = secondarySeperatorLine(...options);
			}

			output.push(string);
		}
	}
	output.push(endLine(...options));

	console.log(output.map((c) => fix + c + reset).join("\n"));
}

/**
 * test if a number in the grid is valid or not
 * @param {number} i
 * @param {number} j
 * @param {string[][]} grid
 * @returns {boolean}
 */
function isValid(i, j, grid) {
	const v = grid[i][j];
	for (let k = 0; k < 9; k++) {
		if ((grid[i][k] == v && j != k) || (grid[k][j] == v && k != i)) {
			return false;
		}
	}
	return true;
}

/**
 *  return a new grid with colors to each digit
 * @param {string[][]} grid the solved grid
 * @param {string[][]} origin the original grid
 *
 * @returns {string[][]}
 */
function addColor(grid, origin) {
	const fix = "\033[1;30;47m";
	const fail = "\033[1;31m";
	const pass = "\033[1;36m";

	return grid.map((line, i) =>
		line.map((cell, j) => {
			if (cell == 0) return " ";
			color = fix;
			if (origin[i][j] == 0) {
				if (cell != 0 && isValid(i, j, grid)) {
					color = pass;
				} else {
					color = fail;
				}
			}

			return color + cell + fix;
		})
	);
}

module.exports = drawGrid;

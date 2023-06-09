/** @format */

const ANSI = {
	color: {
		black: 30,
		red: 31,
		green: 32,
		yellow: 33,
		blue: 34,
		magenta: 35,
		cyan: 36,
		white: 37,
	},
	backgroundColor: {
		black: 40,
		red: 41,
		green: 42,
		yellow: 43,
		blue: 44,
		magenta: 45,
		cyan: 46,
		white: 47,
	},
	style: {
		normal: 0,
		bold: 1,
		dim: 2,
		italic: 3,
		underline: 4,
		blink: 5,
		reverse: 7,
		hidden: 8,
	},
	reset: "\033[0m",
};

/**
 * Change the style,color and the background of text in the `stdout`
 * @typedef {('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white'|null)} colors
 * @typedef {('normal'|'bold'|'dim'|'italic'|'underline'|'blink'|'reverse'|'hidden'|null)} styles
 *
 * @param {styles} style
 * @param {colors} textColor
 * @param {colors} BackgroundColor
 * @param {string} message
 */
function format(
	message = "",
	style = "normal",
	textColor = null,
	BackgroundColor = null
) {
	let escp = "\033[" + ANSI.style[style.toLowerCase()];
	textColor && (escp += `;${ANSI.color[textColor.toLowerCase()]}`);
	BackgroundColor &&
		(escp += `;${ANSI.backgroundColor[BackgroundColor.toLowerCase()]}`);

	escp += "m";
	return escp + message + ANSI.reset;
}

/**
 * Print a success Message to the `stdout`
 * @param {string} message
 *
 */

function success(message) {
	const keyStyle = format(" PASS ", "bold", "black", "green");
	const msgStyle = format(message, "bold", "green");
	console.log(keyStyle + "\t" + msgStyle);
}
/**
 * Print a Fail Message to the `stdout`
 * @param {string} message
 *
 */
function fail(message) {
	const keyStyle = format(" FAIL ", "bold", "black", "red");
	const msgStyle = format(message, "bold", "red");
	console.error(keyStyle + "\t" + msgStyle);
}

/**
 * Print a Warning Message to the `stdout`
 * @param {string} message
 *
 */
function warn(message) {
	const keyStyle = format(" WARN ", "bold", "black", "yellow");
	const msgStyle = format(message, "bold", "yellow");
	console.log(keyStyle + "\t" + msgStyle);
}

function info(message) {
	const keyStyle = format(" Info ", "bold", "black", "cyan");
	const msgStyle = format(message, "bold", "cyan");
	console.log(keyStyle + "\t" + msgStyle);
}

module.exports = {
	success,
	fail,
	warn,
};

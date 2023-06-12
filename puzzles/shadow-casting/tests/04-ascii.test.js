/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = [
    "7",
    "      db       .M\"\"\"bgd   .g8\"\"\"bgd `7MMF\u0027`7MMF\u0027",
    "     ;MM:     ,MI    \"Y .dP\u0027     `M   MM    MM",
    "    ,V^MM.    `MMb.     dM\u0027       `   MM    MM",
    "   ,M  `MM      `YMMNq. MM            MM    MM",
    "   AbmmmqMA   .     `MM MM.           MM    MM",
    "  A\u0027     VML  Mb     dM `Mb.     ,\u0027   MM    MM",
    ".AMA.   .AMMA.P\"Ybmmd\"    `\"bmmmd\u0027  .JMML..JMML."
];
const output = [
    "      db       .M\"\"\"bgd   .g8\"\"\"bgd `7MMF\u0027`7MMF\u0027",
    "     ;MM:     ,MI----\"Y-.dP\u0027-----`M- -MM----MM---",
    "    ,V^MM.    `MMb.```--dM\u0027--``````-` MM-```MM-```",
    "   ,M--`MM-    -`YMMNq.`MM--``     -` MM-`  MM-`",
    "   AbmmmqMA`  . `---`MM-MM.``       ` MM-`  MM-`",
    "  A\u0027-----VML  Mb  ```dM-`Mb.     ,\u0027   MM-`  MM-`",
    ".AMA.```.AMMA.P\"Ybmmd\"--`-`\"bmmmd\u0027--.JMML..JMML.",
    " -----   --------------`` `--------``------------",
    "  `````   ``````````````    ````````  ````````````"
];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("04-ASCII", () => handleTest(output, solve, readline));


/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["7", "      db       .M"""bgd   .g8"""bgd `7MMF'`7MMF'", "     ;MM:     ,MI    "Y .dP'     `M   MM    MM", "    ,V^MM.    `MMb.     dM'       `   MM    MM", "   ,M  `MM      `YMMNq. MM            MM    MM", "   AbmmmqMA   .     `MM MM.           MM    MM", "  A'     VML  Mb     dM `Mb.     ,'   MM    MM", ".AMA.   .AMMA.P"Ybmmd"    `"bmmmd'  .JMML..JMML."];
const output = ["db       .M"""bgd   .g8"""bgd `7MMF'`7MMF'", "     ;MM:     ,MI----"Y-.dP'-----`M- -MM----MM---", "    ,V^MM.    `MMb.```--dM'--``````-` MM-```MM-```", "   ,M--`MM-    -`YMMNq.`MM--``     -` MM-`  MM-`", "   AbmmmqMA`  . `---`MM-MM.``       ` MM-`  MM-`", "  A'-----VML  Mb  ```dM-`Mb.     ,'   MM-`  MM-`", ".AMA.```.AMMA.P"Ybmmd"--`-`"bmmmd'--.JMML..JMML.", " -----   --------------`` `--------``------------", "  `````   ``````````````    ````````  ````````````"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("04-ASCII", () => handleTest(output, solve, readline));


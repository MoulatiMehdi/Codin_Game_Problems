/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Test-4",
    "input":  [
                  "20",
                  "DDDDDDDDDDDDDDDDDDDD",
                  "DAAAAAAAAAAAABBBCCCC",
                  "DAAAAAAAAAAAABBBDDDD",
                  "DAAAAAAAAAAAABBBDDDD",
                  "DAAAAAAAAAAAABBBEEFF",
                  "GGGGGGGGGHHHIIJJEEFF",
                  "GGGGGGGGGHHHIIJJEEFF",
                  "KKKKKLLLLHHHIIJJMMMM",
                  "KKKKKLLLLNNOOPPPMMMM",
                  "QQQQRRSSSNNOOPPPTTTT",
                  "QQQQRRSSSNNOOUUUTTTT",
                  "VVVVRRWWWNNXXUUUYYYY",
                  "VVVVRRWWWZZXXAAAYYYY",
                  "VVVVBBBBBZZXXAAAYYYY",
                  "VVVVBBBBBZZCCCDDEEFR",
                  "GGGHHHIIIJJCCCDDEEFR",
                  "GGGHHHIIIJJKKKDDEEFR",
                  "GGGHHHIIIJJKKKDDEEFR",
                  "LLLLLLLLLLLLLMMMMNNR",
                  "FFFFFFFFFFFFFFFFFFFF"
              ],
    "output":  [
                   "368"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


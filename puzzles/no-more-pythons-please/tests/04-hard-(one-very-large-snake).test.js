/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Hard-(One-VERY-large-snake)",
    "input":  [
                  "16 16",
                  "*--------------*",
                  "|*------------*|",
                  "||*----------*||",
                  "|||*--------*|||",
                  "||||*------*||||",
                  "|||||*----*|||||",
                  "||||||*--*||||||",
                  "|||||||o.|||||||",
                  "||||||||.|||||||",
                  "|||||||*-*||||||",
                  "||||||*---*|||||",
                  "|||||*-----*||||",
                  "||||*-------*|||",
                  "|||*---------*||",
                  "||*-----------*|",
                  "v*-------------*"
              ],
    "output":  [
                   "254",
                   "1"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


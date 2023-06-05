/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["16 16", "*--------------*", "|*------------*|", "||*----------*||", "|||*--------*|||", "||||*------*||||", "|||||*----*|||||", "||||||*--*||||||", "|||||||o.|||||||", "||||||||.|||||||", "|||||||*-*||||||", "||||||*---*|||||", "|||||*-----*||||", "||||*-------*|||", "|||*---------*||", "||*-----------*|", "v*-------------*", ""];
const output = ["254", "1"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("04 Hard (One VERY large snake)", () => handleTest(output, solve, readline));


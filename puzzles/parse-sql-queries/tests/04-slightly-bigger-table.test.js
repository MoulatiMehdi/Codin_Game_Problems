/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-Slightly-bigger-table",
    "input":  [
                  "SELECT Suburb, Regionname FROM Housing WHERE Rooms = 4 ORDER BY CouncilArea DESC",
                  "10",
                  "Suburb Rooms CouncilArea Regionname",
                  "Bulleen 3 Manningham EasternMetropolitan",
                  "Hawthorn 1 Boroondara SouthernMetropolitan",
                  "Hawthorn 3 Boroondara SouthernMetropolitan",
                  "Hawthorn 2 Boroondara SouthernMetropolitan",
                  "Hawthorn 4 Boroondara SouthernMetropolitan",
                  "Hawthorn 2 Boroondara SouthernMetropolitan",
                  "Healesville 3 YarraRanges NorthernVictoria",
                  "HeidelbergHeights 3 Banyule EasternMetropolitan",
                  "HeidelbergHeights 2 Banyule EasternMetropolitan",
                  "HeidelbergWest 3 Banyule EasternMetropolitan"
              ],
    "output":  [
                   "Suburb Regionname",
                   "Hawthorn SouthernMetropolitan"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


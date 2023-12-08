/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-ORDER-BY-DESC",
    "input":  [
                  "SELECT * FROM Fishmonger WHERE Environment = FreshWater ORDER BY Weight DESC",
                  "8",
                  "Name Environment Type Weight",
                  "Prawns FreshWater ShellFish 0.25",
                  "Beluga SaltWater Caviar 1",
                  "Salmon FreshWater Fish 15",
                  "SeaBream SaltWater Fish 0.5",
                  "BlueFinTuna SaltWater Fish 600",
                  "Salmon SaltWater Fish 5",
                  "Trout FreshWater Fish 2",
                  "Lobster SaltWater ShellFish 6"
              ],
    "output":  [
                   "Name Environment Type Weight",
                   "Salmon FreshWater Fish 15",
                   "Trout FreshWater Fish 2",
                   "Prawns FreshWater ShellFish 0.25"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


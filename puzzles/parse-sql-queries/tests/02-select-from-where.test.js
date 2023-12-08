/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-Select-From-Where",
    "input":  [
                  "SELECT Name, FriesSize FROM burgers WHERE FriesSize = plenty",
                  "5",
                  "Name FriesSize Sauce",
                  "JustBaconNoPatty NoFriesThanks PlainSauce",
                  "Classic plenty Ketchup",
                  "Classic++ 3MichelineStarFries MustardFoam",
                  "BlueBurger plenty BlueCheese",
                  "Vegan CelerySticks BambooSugar"
              ],
    "output":  [
                   "Name FriesSize",
                   "Classic plenty",
                   "BlueBurger plenty"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


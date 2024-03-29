/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "05-Titanic-Table",
    "input":  [
                  "SELECT Name, Age, Ticket FROM Titanic ORDER BY Age ASC",
                  "30",
                  "PassengerId Survived Pclass Name Sex Age SibSp Parch Ticket Fare",
                  "760 1 1 Rothes female 33 0 0 110152 86.5000",
                  "258 1 1 Cherry female 30 0 0 110152 86.5000",
                  "505 1 1 Maioni female 16 0 0 110152 86.5000",
                  "586 1 1 Taussig female 18 0 2 110413 79.6500",
                  "559 1 1 Taussig female 39.1 1 1 110413 79.6500",
                  "263 0 1 Taussig male 52 1 1 110413 79.6500",
                  "111 0 1 Porter male 47.1 0 0 110465 52000",
                  "431 1 1 Bjornstrom-Steffansson male 28 0 0 110564 26.5500",
                  "367 1 1 Warren female 60 1 0 110813 75.2500",
                  "171 0 1 Van male 61 0 0 111240 33.5000",
                  "463 0 1 Gee male 47 0 0 111320 38.5000",
                  "524 1 1 Hippach female 44 0 1 111361 57.9792",
                  "330 1 1 Hippach female 16.1 0 1 111361 57.9792",
                  "890 1 1 Behr male 26 0 0 111369 30000",
                  "605 1 1 Homer male 35 0 0 111426 26.5500",
                  "188 1 1 Romaine male 45 0 0 111428 26.5500",
                  "807 0 1 Andrews male 39 0 0 112050 0000",
                  "888 1 1 Graham female 19 0 0 112053 30000",
                  "264 0 1 Harrison male 40 0 0 112059 0000",
                  "210 1 1 Blank male 40.1 0 0 112277 31000",
                  "332 0 1 Partner male 45.5 0 0 113043 28.5000",
                  "537 0 1 Butt male 45.1 0 0 113050 26.5500",
                  "453 0 1 Foreman male 30.1 0 0 113051 27.7500",
                  "858 1 1 Daly male 51 0 0 113055 26.5500",
                  "84 0 1 Carrau male 28.1 0 0 113059 47.1000",
                  "783 0 1 Long male 29 0 0 113501 30000",
                  "378 0 1 Widener male 27 0 2 113503 211.5000",
                  "357 1 1 Bowerman female 22 0 1 113505 55000",
                  "55 0 1 Ostby male 65 0 1 113509 61.9792",
                  "253 0 1 Stead male 62 0 0 113514 26.5500"
              ],
    "output":  [
                   "Name Age Ticket",
                   "Maioni 16 110152",
                   "Hippach 16.1 111361",
                   "Taussig 18 110413",
                   "Graham 19 112053",
                   "Bowerman 22 113505",
                   "Behr 26 111369",
                   "Widener 27 113503",
                   "Bjornstrom-Steffansson 28 110564",
                   "Carrau 28.1 113059",
                   "Long 29 113501",
                   "Cherry 30 110152",
                   "Foreman 30.1 113051",
                   "Rothes 33 110152",
                   "Homer 35 111426",
                   "Andrews 39 112050",
                   "Taussig 39.1 110413",
                   "Harrison 40 112059",
                   "Blank 40.1 112277",
                   "Hippach 44 111361",
                   "Romaine 45 111428",
                   "Butt 45.1 113050",
                   "Partner 45.5 113043",
                   "Gee 47 111320",
                   "Porter 47.1 110465",
                   "Daly 51 113055",
                   "Taussig 52 110413",
                   "Warren 60 110813",
                   "Van 61 111240",
                   "Stead 62 113514",
                   "Ostby 65 113509"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));


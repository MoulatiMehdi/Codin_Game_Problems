/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "02-2-1)-simple-commented-statement",
    "input":  [
                  "8",
                  "CREATE TABLE acheteur (",
                  "    id character integer NOT NULL,",
                  "    date_creation timestamp without time zone,",
                  "    name text,",
                  "    id_createur character varying(32),",
                  "    amount double precision,",
                  ");",
                  "--insert into acheteur(id,date_creation, name, id_createur, amount) values(1,\u002712/08/2020\u0027,\u0027John\u0027,1,100);"
              ],
    "output":  [
                   "CREATE TABLE acheteur (",
                   "    id character integer NOT NULL,",
                   "    date_creation timestamp without time zone,",
                   "    name text,",
                   "    id_createur character varying(32),",
                   "    amount double precision,",
                   ");",
                   "--insert into acheteur(id,date_creation, name, id_createur, amount) values(1,\u002712/08/2020\u0027,\u0027John\u0027,1,100);"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

